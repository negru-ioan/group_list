export const groupList = [
  {
    functions: [
      {
        title: 'MAV',
        functionCode: 'MAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
      {
        title: 'RAV',
        functionCode: 'RAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
      {
        title: 'F24',
        functionCode: 'F24-PAYMENT',
        minValue: '2',
        maxValue: '150',
      },
      {
        title: 'Bonifico SEPA',
        functionCode: 'SEPA-TRANSFER',
        minValue: '2',
        maxValue: '150',
      },
    ],
    groupName: 'Alcolisti anonimi',
    id: 69,
    minValue: '1',
    maxValue: '500',
    users: [
      {
        userId: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        userId: '09452W4295001',
        userInitials: 'EM',
        fullName: 'Eduardo Muie',
      },
      {
        userId: '09452W4208001',
        userInitials: 'DA',
        fullName: 'Donatelo Albo',
      },
      {
        userId: '23152W4295001',
        userInitials: 'MG',
        fullName: 'Michelangelo Gera',
      },
    ],
    warning: '',
  },

  {
    functions: [
      {
        title: 'MAV',
        functionCode: 'MAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
      {
        title: 'RAV',
        functionCode: 'RAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
    ],
    groupName: 'Group 1',
    id: 22,
    minValue: '1',
    maxValue: '500',
    users: [
      {
        userId: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
    ],
    warning: '',
  },

  {
    functions: [
      {
        title: 'F24 Accountant',
        functionCode: 'F24-ACCOUNTANT-PAYMENT',
        minValue: '2',
        maxValue: '100',
      },
      {
        title: 'F24',
        functionCode: 'F24-PAYMENT',
        minValue: '2',
        maxValue: '150',
      },
      {
        title: 'Bonifico Italia',
        functionCode: 'TRANSFER',
        minValue: '0',
        maxValue: '250',
      },
      {
        title: 'MAV',
        functionCode: 'MAV-SLIP',
        minValue: '2',
        maxValue: '150',
      },
      {
        title: 'RAV',
        functionCode: 'RAV-SLIP',
        minValue: '2',
        maxValue: '200',
      },

      {
        title: 'Bonifico SEPA',
        functionCode: 'SEPA-TRANSFER',
        minValue: '2',
        maxValue: '150',
      },
    ],
    groupName: 'My group',
    id: 123,
    minValue: '1',
    maxValue: '150',
    users: [
      {
        userId: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },

      {
        userId: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },

      {
        userId: '09452W4295003',
        userInitials: 'CD',
        fullName: 'Clone Dispo',
      },
      {
        userId: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },

      {
        userId: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },

      {
        userId: '09452W4295003',
        userInitials: 'CD',
        fullName: 'Clone Dispo',
      },
    ],
    warning: 'In atessa che il gruppo di firma venga approvato dai master',
  },
  {
    functions: [
      {
        title: 'MAV',
        functionCode: 'MAV-SLIP',
        minValue: '1',
        maxValue: '10',
      },

      {
        title: 'RAV',
        functionCode: 'RAV-SLIP',
        minValue: '1',
        maxValue: '10',
      },
    ],
    groupName: 'Group Name',
    id: 16,
    minValue: '1',
    maxValue: '10',
    users: [
      {
        userId: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
    ],
  },
  {
    functions: [
      {
        title: 'Bonifico SEPA',
        functionCode: 'SEPA-TRANSFER',
        minValue: 'null',
        maxValue: 'null',
      },
    ],
    groupName: 'Gruppo firma Sepa Transfer',
    id: 71,
    minValue: '50000',
    maxValue: '100000',
    users: [
      {
        userId: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        userId: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
    ],
    warning: 'In atessa che il gruppo di firma venga approvato dai master',
  },
];
export const functions = [
  {
    function_code: ' XML-SEPA-SALARY ',
    function_name: 'Bonifico XML Stipendi',
  },
  {
    function_code: 'EBILL',
    function_name: 'EBILL',
  },
  {
    function_code: 'XML-INTERNATIONAL-TRANSFER',
    function_name: 'CBI_XML INTERNATIONAL TRANSFER',
  },
  {
    function_code: 'XML-URGENT-TRANSFER',
    function_name: 'Bonifico XML Urgente',
  },
  {
    function_code: 'F24-PAYMENT',
    function_name: 'F24',
  },
  {
    function_code: 'RAV-SLIP',
    function_name: 'RAV',
  },
  {
    function_code: 'SEPA-TRANSFER',
    function_name: 'Bonifico SEPA',
  },
  {
    function_code: 'TRANSFER',
    function_name: 'Bonifico Italia',
  },
  {
    function_code: 'BANKBOOK-STATEMENT',
    function_name: 'Bankbook statement',
  },
  {
    function_code: 'MAV-SLIP',
    function_name: 'MAV',
  },
  {
    function_code: 'F24-ACCOUNTANT-PAYMENT',
    function_name: 'F24 Accountant',
  },
  {
    function_code: 'XML-SEPA-TRANSFER',
    function_name: 'XML SEPA',
  },
];
export const users = [
  {
    userId: '09452W4295001',
    fullName: 'Elisa Blu',
  },
  {
    userId: '09452W4295002',
    fullName: 'Sara Neri',
  },
  {
    userId: '09452W4295003',
    fullName: 'Clone Dispo',
  },
  {
    userId: '09452W4295010',
    fullName: 'Mario Rossi',
  },

  {
    userId: '09452W4295011',
    fullName: 'Pinco Pallino',
  },
  {
    userId: '09452W4295012',
    fullName: 'Titi Boom',
  },

  {
    userId: '39957125648321',
    fullName: 'Roberto Carlos',
  },

  {
    userId: '0945231595011',
    fullName: 'Pablo Escobaro',
  },

  {
    userId: '3658415713594sda',
    fullName: 'Dominik Toretto',
  },

  {
    userId: '4re9a35s411564+41',
    fullName: 'Paul Walker',
  },
];
