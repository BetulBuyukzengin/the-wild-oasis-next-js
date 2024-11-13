import SideNavigation from "../_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] h-full gap-12 text-center">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
