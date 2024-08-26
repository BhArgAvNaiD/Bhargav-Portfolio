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

  const menuItems = ["HOME", "ABOUT", "SKILLS", "PROJECTS"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white text-black m-0 w-full"
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
          <Link href="#" className="text-black text-md font-bold">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black text-md font-bold">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black text-md font-bold">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black text-md font-bold">
            PROJECTS
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white font-bold" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
