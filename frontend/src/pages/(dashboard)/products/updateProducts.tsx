import useProductsMutation from "@/hooks/products/useProductsMutation";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../../../components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useParams } from "react-router-dom";
import useProductsQuery from "@/hooks/products/useProductsQuery";
import { useEffect } from "react";




const UpdateProducts = () => {
    const { id } = useParams();
    const { data } = useProductsQuery(id!)
    const { onSubmit, form } = useProductsMutation({
        action: "update"
    });
    useEffect(() => {
        form.reset(data);
    }, [id, form, data]);
    return (

        <>
            <h1 className="text-center my-6 text-3xl font-bold">Cập nhật sản phẩm</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control} name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tên sản phẩm" {...field} id="name" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giá sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder="Giá sản phẩm" {...field} id="price" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ảnh sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ảnh sản phẩm" {...field} id="image" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Danh mục</FormLabel>
                                <FormControl>
                                    <Input placeholder="Danh mục" {...field} id="category" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mô tả sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder="Mô tả sản phẩm" {...field} id="description" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="discount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giảm giá</FormLabel>
                                <FormControl>
                                    <Input placeholder="Giảm giá" {...field} id="discount" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="countInStock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Số lượng trong kho</FormLabel>
                                <FormControl>
                                    <Input placeholder="Số lượng trong kho" {...field} id="countInStock" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} name="featured"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        Featured
                                    </FormLabel>

                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-blue-500">Cập nhật</Button>
                </form>
            </Form>

        </>

    )
}

export default UpdateProducts