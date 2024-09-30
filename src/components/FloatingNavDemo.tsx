import { FloatingNav } from "./ui/Navbar/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="w-4 h-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1  w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="text-4xl font-bold text-center dark:text-white text-neutral-600">
        Productos Disponibles
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
