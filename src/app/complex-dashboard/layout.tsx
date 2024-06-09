import Notification from "./@notification/page"
import Revenue from "./@revenue/page"
import UserDashboard from "./@userdashboard/page"

export default function ComplexDashboardLayout({
    children,
    userdashboard,
    revenue,
    notification,
    login,
  }: {
    children: React.ReactNode;
    userdashboard: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLoggedIn = false;
    return  (
      <div>
        <h1>{children}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{userdashboard}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notification}</div>
        </div>
      </div>
    )  
  }
  {/* <Notification />
    <Revenue />
    <UserDashboard/> */}