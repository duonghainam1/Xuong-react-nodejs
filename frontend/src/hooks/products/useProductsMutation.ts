import { Iproduct } from "@/intertaces/product";
import { addProducts, deleteProducts, updateProducts } from "@/services/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form"
// import { joiResolver } from "@hookform/resolvers/joi"
// import { productsSchema } from "@/Schema/productsSchema";
import { useToast } from "@/components/ui/use-toast"


type useProductsMutationProps = {
    action: "add" | "update" | "delete"
}
type Inputs = {
    name: string,
    price: number,
    category?: string,
    image: string,
    gallery?: string[],
    description: string,
    discount: number,
    featured?: boolean,
    countInStock: number
}

const useProductsMutation = ({ action }: useProductsMutationProps) => {
    const { toast } = useToast()
    const form = useForm({
        // resolvers: joiResolver(productsSchema),
        defaultValues: {
            name: "",
            price: 0,
            image: "",
            discount: 0,
            description: "",
            category: "",
            featured: false,
            countInStock: 0
        }
    });
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: Iproduct) => {
            switch (action) {
                case "add":
                    await addProducts(product)
                    toast({
                        title: "Thêm sản phẩm thành công",
                        variant: "success"
                    })
                    break;
                case "update":
                    await updateProducts(product)
                    toast({
                        title: "Cập nhật danh mục thành công",
                        variant: "success"
                    })
                    break;
                case "delete":
                    await deleteProducts(product._id!)
                    toast({
                        title: "Xóa sản phẩm thành công",
                        variant: "success"
                    })
                    break;
                default:
                    null
            };

        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS_KEY"]
            })
            form.reset();
        }
    })
    const onSubmit: SubmitHandler<Inputs> = (product) => {
        mutate(product)
    }
    return { form, mutate, ...rest, onSubmit }
}

export default useProductsMutation