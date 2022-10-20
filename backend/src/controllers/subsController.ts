import { IRequest, IResponse, INext } from "../interfaces/vendors";
import BaseError from "../error/baseError";
import Subsc from "../models/subscription";
const subsController = {
  createSubs: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      let newSub = await new Subsc(req.body).save();
      if (!newSub) throw new BaseError("Something went wrong!!");
      res.status(200).send({ status: 200, message: "Thank You For Subscribing!", data: newSub });
    } catch (err) {
      next(err);
    }
  },
  fetchSubs: async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const { pageOffset, pageSize, filter } = req.body;
      const latestPageOffset = pageOffset - 1;
      let fetchedSubs;
      let count;
      if (filter) {
        fetchedSubs = await Subsc.find({ tag: filter }).skip(latestPageOffset).limit(pageSize);
        count = await Subsc.find({ tag: filter }).count();
      } else {
        fetchedSubs = await Subsc.find({}).skip(latestPageOffset).limit(pageSize);
        count = await Subsc.find({}).count();
      }
      if (fetchedSubs.length === 0) throw new BaseError("No Subscriptions found");

      return res.status(200).send({ status: 200, message: "Subscription Fetched", data: { fetchedSubs, count } });
    } catch (err) {
      next(err);
    }
  },
};
export default subsController;
