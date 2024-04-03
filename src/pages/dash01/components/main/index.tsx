import { Button, Card, Table, TableProps } from "antd"
import './index.css'
import Avatar from "antd/es/avatar/avatar";

const { Meta } = Card

interface DataType {
  key: string;
  customer: {
    name: string;
    email: string;
  };
  amount: string;
}

interface SalesType {
  key: string;
  customer: {
    name: string;
    email: string;
    avastar: string;
  };
  sales: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    onHeaderCell: () => {
      return {
        style: {
          height: '3rem',
          textAlign: 'left',
          padding: '0 1rem',
          verticalAlign: 'middle',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          position: 'static',
          fontWeight: 500
        }
      }
    },
    onCell: () => {
      return {
        style: {
          height: '3rem',
          textAlign: 'left',
          padding: '1rem',
          verticalAlign: 'middle',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          position: 'static',
          color: '#09090B'
        }
      }
    },
    render: (text: DataType['customer']) =>
      <div className="customer">
        <div className="customer-name">{text.name}</div>
        <div className="customer-email">{text.email}</div>
      </div>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    onHeaderCell: () => {
      return {
        style: {
          height: '3rem',
          textAlign: 'right',
          padding: '0 1rem',
          verticalAlign: 'middle',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          position: 'static',
          fontWeight: 500
        }
      }
    },
    onCell: () => {
      return {
        style: {
          height: '3rem',
          textAlign: 'right',
          padding: '0 1rem',
          verticalAlign: 'middle',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          position: 'static',
          color: '#09090B'
        }
      }
    },
  }
]
const data: DataType[] = [
  {
    key: '1',
    customer: {
      name: 'Liam Johnson',
      email: 'liam@example.com'
    },
    amount: '$250.00'
  },
  {
    key: '2',
    customer: {
      name: 'Olivia Smith',
      email: 'olivia@example.com'
    },
    amount: '$150.00'
  },
  {
    key: '3',
    customer: {
      name: 'Noah Williams',
      email: 'noah@example.com'
    },
    amount: '$350.00'
  },
  {
    key: '4',
    customer: {
      name: 'Emma Brown',
      email: 'emma@example.com'
    },
    amount: '$450.00'
  },
  {
    key: '5',
    customer: {
      name: 'Liam Johnson',
      email: 'liam@example.com'
    },
    amount: '$550.00'
  }
]
const saleColumns: TableProps<SalesType>['columns'] = [
  {
    key: 'customer',
    title: 'customer',
    dataIndex: 'customer',
    onCell: () => {
      return {
        style: {
          height: '3rem',
          textAlign: 'left',
          padding: '0 1rem',
          verticalAlign: 'middle',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          position: 'static',
          color: '#09090B'
        }
      }
    },
    render: (text: SalesType['customer']) =>
      <div className="customer">
        <Avatar src={<img src={text.avastar} />} />
        <div className="customer-info">
          <div className="customer-name">{text.name}</div>
          <div className="customer-email">{text.email}</div>
        </div>
      </div>
  }
]
const saleData: SalesType[] = [
  {
    key: '1',
    customer: {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      avastar: 'https://ui.shadcn.com/avatars/01.png',
    },
    sales: '+$1,999.00'
  },
  {
    key: '2',
    customer: {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      avastar: 'https://ui.shadcn.com/avatars/02.png',
    },
    sales: '+$39.00'
  },
  {
    key: '3',
    customer: {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      avastar: 'https://ui.shadcn.com/avatars/03.png',
    },
    sales: '+$299.00'
  },
  {
    key: '4',
    customer: {
      name: 'William Kim',
      email: 'will@email.com',
      avastar: 'https://ui.shadcn.com/avatars/04.png',
    },
    sales: '+$99.00'
  },
  {
    key: '5',
    customer: {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      avastar: 'https://ui.shadcn.com/avatars/03.png',
    },
    sales: '+$39.00'
  }
]


const Main = () => {
  return (
    <main>
      <div className="main-card">
        <Card
          styles={{
            body: {
              padding: 0,
            }
          }}
        >
          <Meta
            title={
              <div className="card-type">
                <h3 className="card-type-name">Total Revenue</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground">
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            }
            description={
              <div className="card-detail">
                <div className="card-detail-up">$45,231.89</div>
                <p className="card-detail-down">+20.1% from last month</p>
              </div>
            }
          />
        </Card>
        <Card
          styles={{
            body: {
              padding: 0,
            },
            title: {
              width: 'auto',
            }
          }}
        >
          <Meta
            title={
              <div className="card-type">
                <h3 className="card-type-name">Subscriptions</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 text-muted-foreground">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            }
            description={
              <div className="card-detail">
                <div className="card-detail-up">+2350</div>
                <p className="card-detail-down">+180.1% from last month</p>
              </div>
            }
          />
        </Card>
        <Card
          styles={{
            body: {
              padding: 0,
            },
            title: {
              width: 'auto',
            }
          }}
        >
          <Meta
            title={
              <div className="card-type">
                <h3 className="card-type-name">Sales</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-4 w-4 text-muted-foreground">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
            }
            description={
              <div className="card-detail">
                <div className="card-detail-up">+12,234</div>
                <p className="card-detail-down">+19% from last month</p>
              </div>
            }
          />
        </Card>
        <Card
          styles={{
            body: {
              padding: 0,
            },
            title: {
              width: 'auto',
            }
          }}
        >
          <Meta
            title={
              <div className="card-type">
                <h3 className="card-type-name">Active Now</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-4 w-4 text-muted-foreground">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            }
            description={
              <div className="card-detail">
                <div className="card-detail-up">+573</div>
                <p className="card-detail-down">+201 since last hour</p>
              </div>
            }
          />
        </Card>
      </div>
      <div className="main-detail">
        <Card
          styles={{
            body: {
              padding: 0,
              border: 1,
              borderRadius: '8px',
              color: '#09090B',
            },
            title: {
              width: 'auto',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }
          }}
        >
          <Meta
            title={
              <div className="detail-title">
                <div className="detail-title-left">
                  <div className="detail-main">
                    Transactions
                  </div>
                  <p className="detail-info">Recent transactions from your store.</p>
                </div>
                <Button className="detail-right">
                  View All
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </Button>
              </div>
            }
            description={
              <div className="detail-wrapper">
                <div className="detail-detail">
                  <Table
                    columns={columns}
                    dataSource={data}
                    bordered={false}
                    pagination={false}
                  />
                </div>
              </div>
            }
          />
        </Card>
        <Card
          styles={{
            body: {
              padding: 0,
            },
            title: {
              width: 'auto',
            }
          }}
        >
          <Meta
            title={
              <div className="detail-wrapper-right">
                <h3 className="detail-wrapper-title">Recent Sales</h3>
              </div>
            }
            description={
              <div className="detail-wrapper-right-description">
                {saleData.map((item: SalesType) => (
                  <div className="sale-item" key={item.key}>
                    <Avatar src={<img src={item.customer.avastar} />} />
                    <div className="right-customer-info">
                      <p className="customer-name">{item.customer.name}</p>
                      <p className="customer-email">{item.customer.email}</p>
                    </div>
                    <div className="customer-sale">{item.sales}</div>
                  </div>
                ))}
              </div>
            }
          />
        </Card>
      </div>
    </main>
  )
}

export default Main
