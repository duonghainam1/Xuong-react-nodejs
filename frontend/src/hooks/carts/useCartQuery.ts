import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "../useStorage";
import instance from "@/config/axios";
import { reduce } from "lodash";

const useCart = () => {
    const queryClient = useQueryClient()
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;
    const { data, ...rest } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const { data } = await instance.get(`/cart/${userId}`);
            return data;
        },
    });

    const { mutate } = useMutation({
        mutationFn: async ({ action, product }: { action: string, product: string }) => {
            switch (action) {
                case "increase":
                    await instance.post(`/cart/increase`, {
                        userId,
                        product
                    })
                    break;
                case "reduce":
                    await instance.post(`/cart/reduce`, {
                        userId,
                        product
                    })
                    break;
                case "delete":
                    await instance.post(`/cart/delete`, {
                        userId,
                        product
                    })
                    break;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })

    const calcuateTotal = () => {
        if (!data || !data.products) return 0
        return reduce(data.products, (total, product) => total + product.price * product.quantity, 0)
    }
    return {
        data,
        ...rest,
        mutate,
        calcuateTotal
    }
}
export default useCart;