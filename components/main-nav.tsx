import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface MainNavProps {
  data: any;
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id},`,
  }));
  return (
    <div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transitio-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
