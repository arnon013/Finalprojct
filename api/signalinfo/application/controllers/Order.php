<?php
defined('BASEPATH') or exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS')
{
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    exit;
}

//required for REST API
require (APPPATH . '/libraries/REST_Controller.php');
require APPPATH . 'libraries/Format.php';
use Restserver\Libraries\REST_Controller;

class Order extends REST_Controller
{

    function __construct()
    {
        parent::__construct();
        $this
            ->load
            ->model('Order_model', 'wm');
    }

    function orders_get()
    {
        $orders = $this
            ->wm
            ->get_order_list();

        if ($orders)
        {
            $this->response($orders, 200);
        }
        else
        {
            $this->response(array() , 200);
        }
    }

    function total_get()
    {
        $total = $this
            ->wm
            ->get_total();

        if ($total)
        {
            $this->response($total, 200);
        }
        else
        {
            $this->response(array() , 200);
        }
    }

    function order_get()
    {
        if (!$this->get('orderid'))
        {
            $this->response(NULL, 400);
        }

        $order = $this
            ->wm
            ->get_order($this->get('orderid'));

        if ($order)
        {
            $this->response($order, 200);
        }
        else
        {
            $this->response(array() , 500);
        }
    }

    function member_id_get()
    {
        if (!$this->get('member_id'))
        {
            $this->response(NULL, 400);
        }

        $order = $this
            ->wm
            ->get_member_id($this->get('member_id'));

        if ($order)
        {
            $this->response($order, 200);
        }
        else
        {
            $this->response(array() , 500);
        }
    }
    function member_get()
    {
        if (!$this->get('member_id'))
        {
            $this->response(NULL, 400);
        }

        $order = $this
            ->wm
            ->get_member($this->get('member_id'));

        if ($order)
        {
            $this->response($order, 200);
        }
        else
        {
            $this->response(array() , 500);
        }
    }
 
    function add_order_post()
    {
        
         $order_img = $this->post('img');
        $order_member_id = $this->post('member_id');
        $order_date = $this->post('date');
        $order_name = $this->post('name');
        $order_address = $this->post('address');
        $order_email = $this->post('email');
        $order_tel = $this->post('tel');
        $order_total = $this->post('total');
        $order_number = $this->post('number');
        $order_detail = json_decode(json_encode($this->post('detail')) , true);
        //$p = array("pp"=>1,2,3,4);
        $result = $this
            ->wm
            ->add_order($order_member_id, $order_img,$order_date, $order_name, $order_address, $order_email, $order_tel, $order_total, $order_number, $order_detail);
 
           if ($result === false)
        {
            $this
                ->output
                ->set_output($order_detail);
            $this->response(array(
                'status' => 'failed'
            ));
        }
        else
        {
            $this
                ->output
                ->set_output($order_detail);
            $this->response(array(
                'status' => 'success',
                'result' => $order_img
            ));
        }
    }

    function update_order_put()
    {
        $orderid = $this->put('orderid');
        $order_member_id = $this->put('member_id');
        $order_date = $this->put('date');

        $order_address = $this->put('address');
        $order_email = $this->put('email');
        $order_tel = $this->put('tel');
        $order_total = $this->put('total');
        $order_number = $this->put('number');

        $result = $this
            ->wm
            ->update_order($orderid, $order_member_id, $order_date, $order_tel, $order_address, $order_email, $order_total, $order_number);

        if ($result === false)
        {
            $this->response(array(
                'status' => 'failed'
            ));
        }
        else
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
    }

    function delete_order_delete($orderid)
    {

        $result = $this
            ->wm
            ->delete_order($orderid);

        if ($result === false)
        {
            $this->response(array(
                'status' => 'failed'
            ));
        }
        else
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
    }

}

