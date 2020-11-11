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

class Product extends REST_Controller
{

    function __construct()
    {
        parent::__construct();
        $this
            ->load
            ->model('product_model', 'wm');
    }

    function products_get()
    {
        $products = $this
            ->wm
            ->get_product_list();

        if ($products)
        {
            $this->response($products, 200);
        }
        else
        {
            $this->response(array() , 200);
        }
    }

    function product_get()
    {
        if (!$this->get('id'))
        { //query parameter, example, products?id=1
            $this->response(NULL, 400);
        }

        $product = $this
            ->wm
            ->get_product($this->get('id'));

        if ($product)
        {
            $this->response($product, 200); // 200 being the HTTP response code
            
        }
        else
        {
            $this->response(array() , 500);
        }
    }

    function add_product_post()
    {
        $product_name = $this->post('name');
        $product_des = $this->post('description');
        $product_price = $this->post('price');
        $product_cate_id = $this->post('category_id');
        $product_qty = $this->post('qty');
        $product_waranty = $this->post('waranty');
        $product_img_id = $this->post('img');

        $result = $this
            ->wm
            ->add_product($product_name, $product_des, $product_price, $product_cate_id, $product_qty, $product_waranty, $product_img_id);

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

    function update_product_put()
    {
        $product_id = $this->put('id');
        $product_name = $this->put('name');
        $product_des = $this->put('description');
        $product_price = $this->put('price');
        $product_cate_id = $this->put('category_id');
        $product_qty = $this->put('qty');
        $product_waranty = $this->put('waranty');
        $product_img_id = $this->put('img');

        $result = $this
            ->wm
            ->update_product($product_id, $product_name, $product_des, $product_price, $product_cate_id, $product_qty, $product_waranty, $product_img_id);

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

    function delete_product_delete($product_id)
    { //path parameter, example, /delete/1
        $result = $this
            ->wm
            ->delete_product($product_id);

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

