<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Order_model extends CI_Model
{

    private $orders = 'orders';
    private $order_detail = 'order_detail';

    function get_order_list()
    {
        $query = $this
            ->db
            ->get($this->orders);
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_total()
    {
        $this
            ->db
            ->select_sum('total');
        $query = $this
            ->db
            ->get($this->orders);
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_order($orderid)
    {
        $query = $this
            ->db
            ->select('*')
            ->from("orders")
            ->join('order_detail', 'order_detail.order_id = orders.orderid', 'inner')
            ->join('products', 'products.id = order_detail.product_id')
            ->where("orders.orderid", $orderid)->get();
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_member_id($member_id)
    {
        $query = $this
            ->db
            ->select('*')
            ->from("orders")
            ->join('order_detail', 'order_detail.order_id = orders.orderid', 'inner')
            ->join('products', 'products.id = order_detail.product_id')
            ->where("orders.member_id", $member_id)->get();
        if ($query)
        {
            return $query->result();
        }
        return NULL;

    }

    function get_member($member_id)
    {
        $query = $this
            ->db
            ->get_where($this->orders, array(
            "member_id" => $member_id
        ));
        if ($query)
        {
            return $query->result();
        }
        return NULL;

    }

    function add_order($order_member_id,$order_img, $order_date, $order_name, $order_address, $order_email, $order_tel, $order_total, $order_number, $order_detail)
    {
        $Icon = time().'.png';
        $data = array(
            'member_id' => $order_member_id,
            'date' => $order_date,
            'cname' => $order_name,
            'address' => $order_address,
            'email' => $order_email,
            'tel' => $order_tel,
            'total' => $order_total,
            'number' => $order_number,
            
    
        );
        $this
            ->db
            ->insert($this->orders, $data);
        $insert_id = $this
            ->db
            ->insert_id();
            
         $dataI = $order_img;
        $img_array = explode(';',$dataI);
        $img_array2 = explode(",",$img_array[1]);
        $dataI = base64_decode($img_array2[1]);
        
        $path = "img/$insert_id";
         if (!is_dir($path)) {
            mkdir($path , 0777, TRUE);
        
        }
        $path .= "/$Icon";
        file_put_contents($path,$dataI);
       $this
            ->db
            ->where('orderid', $insert_id);

        $this
            ->db
            ->update($this->orders, ["order_img"=>$path]);
            
            
        foreach ($order_detail as $i)
        {
            $data = array(
                'product_id' => $i['id'],
                'order_id' => $insert_id,
                'count' => $i['count'],
                'price' => $i['price']
            );
            $this
                ->db
                ->insert($this->order_detail, $data);
        }
     return $insert_id;

    }

    function update_order($orderid, $order_member_id, $order_date, $order_tel, $order_address, $order_email, $order_total, $order_number)
    {
        $data = array(
            'member_id' => $order_member_id,
            'date' => $order_date,
            'address' => $order_address,
            'email' => $order_email,
            'tel' => $order_tel,
            'total' => $order_total,
            'number' => $order_number
        );
        $this
            ->db
            ->where('orderid', $orderid);
        $this
            ->db
            ->update($this->orders, $data);
    }

    function delete_order($orderid)
    {
        $this
            ->db
            ->where('orderid', $orderid);
        $this
            ->db
            ->delete($this->orders);

    }

}

