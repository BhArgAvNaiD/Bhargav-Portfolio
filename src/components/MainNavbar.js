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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { tag: "HOME", too: "/#Home" },
    { tag: "Work", too: "/#Work" },
    { tag: "SKILLS", too: "/#Skills" },
    { tag: "PROJECTS", too: "/Projects" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent shadow-sm shadow-slate-400 text-black m-0 w-full scroll-smooth"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          {/* <MbnLogo /> */}
          <p className="font-bold text-inherit text-xl">MBN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:flex gap-4 hidden" justify="end">
        <NavbarItem>
          <Link href="/#Home" className="text-black text-md font-bold">
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

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={item.too}
              className="w-full text-black font-bold"
              href="#"
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
