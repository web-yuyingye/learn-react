export const defaultData = {
  index: -1,
  goodsName: '',
  count: 0,
};
export enum panelType {
  stock = 'stock',
  goods = 'goods',
}

export const panelList = [
  { name: panelType.stock, description: '库存' },
  { name: panelType.goods, description: '商品' },
];

export function findPanelDescription(val) {
  return panelList.find((item) => item.name === val)?.description ?? val;
}
