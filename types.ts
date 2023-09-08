export type Group = {
  functions: {
    title: string;
    functionCode: string;
    minValue: string;
    maxValue: string;
  }[];
  groupName: string;
  id: number;
  minValue: string;
  maxValue: string;
  users: {
    userId: string;
    userInitials: string;
    fullName: string;
  }[];
  warning?: string;
};

export type user = {
  userId: string;
  fullName: string;
  checked?: boolean;
};
