import useProductsMutation from '@/hooks/products/useProductsMutation';
import useProductsQuery from '@/hooks/products/useProductsQuery'
import { Iproduct } from '@/intertaces/product'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router-dom';

const ListProducts = () => {
    const { mutate } = useProductsMutation({
        action: "delete",
    })
    const { data, isLoading } = useProductsQuery();
    if (isLoading) return <div>Loading..</div>
    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-center my-6 text-3xl font-bold '>Danh sách sản phẩm</h1>
                <Link to={'/admin/products/add'}><Button className='my-5 bg-blue-500'>Thêm</Button></Link>
            </div>
            <Table className='border-collapse'>

                <TableCaption>Bảng sản phẩm</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">ID</TableHead>
                        <TableHead className='border'>Tên sản phẩm</TableHead>
                        <TableHead className='border'>Giá sản phẩm</TableHead>
                        <TableHead className='border'>Ảnh sản phẩm</TableHead>
                        <TableHead className='border'>Mô tả sản phẩm</TableHead>
                        <TableHead className='border'>Discount</TableHead>
                        <TableHead className='border'>Số lượng trong kho</TableHead>
                        <TableHead className='border'>Danh mục</TableHead>
                        <TableHead className='border'>Chức năng</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>

                    {data?.map((product: Iproduct, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className='border'>{product.name}</TableCell>
                                <TableCell className='border'>{product.price}</TableCell>
                                <TableCell className='border'><img src={product.image} width={100} alt="" /></TableCell>
                                <TableCell className='border'>{product.description}</TableCell>
                                <TableCell className='border'>{product.discount}</TableCell>
                                <TableCell className='border'>{product.countInStock}</TableCell>
                                <TableCell className='border'>{product.category}</TableCell>
                                <TableCell className='border'>
                                    <Button className='bg-red-500' onClick={() => mutate(product)}>Xóa</Button>
                                    <Link to={`/admin/products/edit/${product._id}`}><Button className='my-5 bg-blue-500'>Sửa</Button></Link>
                                </TableCell>

                            </TableRow>
                        )
                    })}


                </TableBody>
            </Table>
        </>


    )

}

export default ListProducts