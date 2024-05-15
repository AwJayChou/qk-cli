export const treeData = {
  id: '0',
  name: '房地产行业',
  count: 1000,
  children: [
    {
      id: '家居家装',
      name: '家居家装',
      count: 98,
      rate: '10.34%',
      state: 'right',
      children: [
        {
          id: '设计',
          name: '设计设计设计设计',
          count: 321,
          state: 'right',
          rate: '28.34%',
        },
        {
          id: '建材',
          name: '建材',
          state: 'right',
          count: 66,
          rate: '7.34%',
        },
        {
          id: '土地购置',
          name: '土地购置',
          count: 123,
          rate: '12.34%',
          state: 'left',
        },
        {
          id: '规划设计',
          name: '规划设计',
          state: 'left',
          count: 333,
          rate: '33.34%',
          children: [
            {
              id: '主体原材料',
              name: '主体原材料',
              count: 84,
              rate: '7.34%',
              state: 'left',
            },
          ],
        },
      ],
    },
  ],
};
