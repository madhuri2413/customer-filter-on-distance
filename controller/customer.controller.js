import { getCustomerListWithSortedId } from '../services/customer.service';

export const getSortedCustomerList = async (req, res) => {
  try {
    const customerList = await getCustomerListWithSortedId(req.query.rangeInKm);
    res.send(customerList);
  } catch (err) {
    throw new Error(err);
  }
};
