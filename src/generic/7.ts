
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}


type RoleDescrType = Record<UserRole, string>;

const RoleDescription: RoleDescrType = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
