import { Request, Response } from "express";
import { DetailOrderService } from "../../services/Order/DetailOrderService";



class DetailOrderController {
    async handle(req: Request, res: Response) {

        const order_id = req.query.order_id as string;

        const DetailsOrder = new DetailOrderService()

        const orders = await DetailsOrder.execute({order_id})

        return res.json(orders)
    }
}

export { DetailOrderController }