<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Product_model extends CI_Model
{

    private $products = 'products';

    function get_product_list()
    {
        $query = $this
            ->db
            ->get($this->products);
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_product($id)
    {
        $query = $this
            ->db
            ->get_where($this->products, array(
            "id" => $id
        ));
        if ($query)
        {
            return $query->row();
        }
        return NULL;
    }

    function add_product($product_name, $product_des, $product_price, $product_cate_id, $product_qty, $product_waranty, $product_img_id)
    {
         $Icon = time().'.png';
        $data = array(
            'name' => $product_name,
            'description' => $product_des,
            'price' => $product_price,
            'category_id' => $product_cate_id,
            'qty' => $product_qty,
            'waranty' => $product_waranty,
            'img' => $product_img_id
        );
       
        $this
            ->db
            ->insert($this->products, $data);
            
            $insert_id = $this
            ->db
            ->insert_id();

        $dataI = $product_img_id;
        $img_array = explode(';', $dataI);
        $img_array2 = explode(",", $img_array[1]);
        $dataI = base64_decode($img_array2[1]);

        $path = "imgproduct/$insert_id";
        if (!is_dir($path))
        {
            mkdir($path, 0777, true);

        }
        $path .= "/$Icon";
        file_put_contents($path, $dataI);
        $this
            ->db
            ->where('id', $insert_id);
            $this
            ->db
            ->update($this->products, ["img" => $path]);
    }

    function update_product($product_id, $product_name, $product_des, $product_price, $product_cate_id, $product_qty, $product_waranty, $product_img_id)
    {
$Icon = time() . '.png';
        $data = array(
            'name' => $product_name,
            'description' => $product_des,
            'price' => $product_price,
            'category_id' => $product_cate_id,
            'qty' => $product_qty,
            'waranty' => $product_waranty
          
        );
        $this
            ->db
            ->where('id', $product_id);
        $this
            ->db
            ->update($this->products, $data);
    
   $dataI = $product_img_id;
        $img_array = explode(';', $dataI);
        $img_array2 = explode(",", $img_array[1]);
        $dataI = base64_decode($img_array2[1]);

        $path = "imgproduct/$product_id";
        if (!is_dir($path))
        {
            mkdir($path, 0777, true);

        }
        $path .= "/$Icon";
        file_put_contents($path, $dataI);
        $this
            ->db
            ->where('id', $product_id);

        $this
            ->db
            ->update($this->products, ["img" => $path]);
    }
}

