"use client";

import { Menu } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa";

export default function HamDropdown({ items }) {
  return (
    <div className="ham-dropdown">
      <Menu.Root>
        <Menu.Trigger asChild>
            <button className="ham-dropdown__button">
              <FaBars className="ham-dropdown__icon" size={30}/>
            </button>
        </Menu.Trigger>
        <Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Volunteer</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu.Content>
        </Menu.Trigger>
      </Menu.Root>
    </div>
  );
}
