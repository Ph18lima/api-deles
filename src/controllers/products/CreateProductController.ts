import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";



class CreateProductController {

    async handle(req: Request, res: Response) {

        const { banner, category_id, description, name, price } = req.body

        const createProductController = new CreateProductService()

        if(!req.file) {
            throw new Error("error upload file")


        } else{

            const { originalname, filename: banner} = req.file

             const NewProduct = await createProductController.execute({
            banner,
            category_id,
            description,
            name,
            price
        })

        return res.json(NewProduct)
        }
    }
}

export { CreateProductController }