import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MainNavbar() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { tag: "HOME", to: "/#Home" },
    { tag: "WORK", to: "/#Work" },
    { tag: "SKILLS", to: "/#Skills" },
    { tag: "PROJECTS", to: "/#Projects" },
  ];

  // const handleMenuItemClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <Navbar className="bg-transparent shadow-sm shadow-slate-400 text-black m-0 w-full scroll-smooth flex flex-col justify-center items-center">
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/"
            className="font-Poppins font-bold text-inherit text-xl"
          >
            MBN
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:flex gap-4 hidden" justify="end">
        <NavbarItem>
          <Link href="/" className="text-black text-md font-bold">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#Work" className="text-black text-md font-bold">
            WORK
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#Skills" className="text-black text-md font-bold">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#Projects" className="text-black text-md font-bold">
            PROJECTS
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="md:hidden" />

      <NavbarMenu className="bg-transparent font-Dmsans flex justify-start pt-10 items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            // onClick={handleMenuItemClick}
          >
            <Link
              className="w-full font-Poppins text-black font-bold"
              href={item.to}
              size="lg"
            >
              {item.tag}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
