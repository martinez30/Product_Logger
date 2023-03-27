import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import logo from "./logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box } from ".."

const Header = () => {
    const router = useRouter();
    
    const menus = [
        {
            name: "Produtos",
            href: "/products",
        }
    ]

    return (
        <Box css={{ maxW: "100%", marginBottom: 10 }}>
            <Navbar isBordered variant="static" style={{ maxWidth: "100%" }} >
                <Navbar.Brand>
                    <Image src={logo} alt="Logo" />
                    <Text b color="inherit" hideIn="xs">
                        Product Logger
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    {menus.map((menu, index) => <Navbar.Link key={index} isActive={ router.pathname == menu.href } href={menu.href}>{menu.name}</Navbar.Link>)}
                </Navbar.Content>
            </Navbar>
        </Box>
    )
}

export default Header;