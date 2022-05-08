import { UserStatus } from "@app/domain";

export const useFoo = () => {
  return useState("foo", () => UserStatus.Active);
};
