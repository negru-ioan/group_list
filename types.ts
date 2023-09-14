export type functions = {
  title: string;
  functionCode: string;
  minValue: string;
  maxValue: string;
  checked?: boolean;
};

export type Group = {
  functions: functions[];
  groupName: string;
  id: number;
  minValue: string;
  maxValue: string;
  users: {
    userId: string;
    userInitials: string;
    fullName: string;
    checked?: boolean;
  }[];
  warning?: string;
};

export type user = {
  userId: string;
  fullName: string;
  checked?: boolean;
};

export type Function = {
  function_code: string;
  function_name: string;
};

export type RetardedGroup = Group & {
  functions: (functions & { checked: boolean })[];
};
