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

class Booking extends REST_Controller
{

    function __construct()
    {
        parent::__construct();
        $this
            ->load
            ->model('Booking_model', 'wm');
    }

    function bookings_get()
    {
        $bookings = $this
            ->wm
            ->get_booking_list();

        if ($bookings)
        {
            $this->response($bookings, 200);
        }
        else
        {
            $this->response(array() , 200);
        }
    }

    function booking_get()
    {
        if (!$this->get('id'))
        { 
            $this->response(NULL, 400);
        }

        $booking = $this
            ->wm
            ->get_booking($this->get('id'));

        if ($booking)
        {
            $this->response($booking, 200); // 200 being the HTTP response code
            
        }
        else
        {
            $this->response(array() , 500);
        }
    }
 function book_get()
    {
        if (!$this->get('id'))
        {
            $this->response(NULL, 400);
        }

        $booking = $this
            ->wm
            ->get_book($this->get('id'));

        if ($booking)
        {
            $this->response($booking, 200); 
            
        }
        else
        {
            $this->response(array() , 500);
        }
    }

    function cus_get()
    {
        if (!$this->get('cus'))
        { //query parameter, example, websites?id=1
            $this->response(NULL, 400);
        }

        $booking = $this
            ->wm
            ->get_cus($this->get('cus'));

        if ($booking)
        {
            $this->response($booking, 200); // 200 being the HTTP response code
            
        }
        else
        {
            $this->response(array() , 500);
        }
    }

    function tech_get()
    {
        if (!$this->get('tech'))
        { //query parameter, example, websites?id=1
            $this->response(NULL, 400);
        }

        $booking = $this
            ->wm
            ->get_tech($this->get('tech'));

        if ($booking)
        {
            $this->response($booking, 200); // 200 being the HTTP response code
            
        }
        else
        {
            $this->response(array() , 500);
        }
    }

    function add_booking_post()
    {
        $booking_cus = $this->post('cus');
        $booking_date = $this->post('date');
        $booking_breakdown = $this->post('breakdown');
        $booking_name = $this->post('name');
        $booking_statusbook = $this->post('statusbook');
        $booking_breakdowntech = $this->post('breakdowntech');
        $booking_price = $this->post('price');
        $booking_tech = $this->post('tech');
        $booking_withdraw = $this->post('withdraw');
        $booking_service = $this->post('service');
$booking_booking_img = $this->post('booking_img');
        $result = $this
            ->wm
            ->add_booking($booking_cus, $booking_date, $booking_breakdown, $booking_name, $booking_statusbook, $booking_breakdowntech, $booking_price, $booking_tech, $booking_withdraw, $booking_service,$booking_booking_img);

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

    function update_booking_put()
    {
        $booking_id = $this->put('id');
        $booking_date = $this->put('date');
        $booking_name = $this->put('name');
        $booking_breakdown = $this->put('breakdown');
        $booking_breakdowntech = $this->put('breakdowntech');
        $booking_price = $this->put('price');
        $booking_datefix = $this->put('datefix');
        $booking_book_img = $this->put('book_img');
        $booking_withdraw = $this->put('withdraw');
        $booking_service = $this->put('service');
        $result = $this
            ->wm
            ->update_booking($booking_id, $booking_date, $booking_name, $booking_breakdown, $booking_breakdowntech, $booking_price, $booking_datefix, $booking_withdraw, $booking_service ,$booking_book_img);

        if ($result == true)
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
        else
        {

            $this->response(array(
                'status' => 'failed'
            ));
        }
    }
     function update_booktech_put()
    {
   $booking_booking_id = $this->put('booking_id');
        $booking_id = $this->put('id');
        $booking_date = $this->put('date');
        $booking_name = $this->put('name');
        $booking_breakdown = $this->put('breakdown');
        $booking_breakdowntech = $this->put('breakdowntech');
        $booking_price = $this->put('price');
        $booking_datefix = $this->put('datefix');
        $booking_detail = json_decode(json_encode($this->put('detail')) , true);
        $booking_withdraw = $this->put('withdraw');
        $booking_service = $this->put('service');
        $booking_statusbook = $this->put('statusbook');
        $result = $this
            ->wm
            ->update_booktech($booking_id, $booking_date, $booking_name, $booking_breakdown, $booking_breakdowntech, $booking_price, $booking_datefix, $booking_withdraw, $booking_service,$booking_statusbook,$booking_detail,$booking_booking_id);

       if ($result === false)
        {
            $this
                ->output
                ->set_output($booking_detail);
            $this->response(array(
                'status' => 'failed'
            ));
        }
        else
        {
            $this
                ->output
                ->set_output($booking_detail);
            $this->response(array(
                'status' => 'success',
                'result' => $booking_detail
            ));
        }
    }


    function update_statusbook_put()
    {
        $booking_id = $this->put('id');
        $booking_statusbook = $this->put('statusbook');
        $booking_name = $this->put('name');
        $booking_date = $this->put('date');
        $booking_breakdown = $this->put('breakdown');
        $booking_breakdowntech = $this->put('breakdowntech');
        $booking_service = $this->put('service');
        $booking_price = $this->put('price');
        $booking_datefix = $this->put('datefix');
        $booking_tech = $this->put('tech');

        $result = $this
            ->wm
            ->update_statusbook($booking_id, $booking_statusbook, $booking_name, $booking_date, $booking_breakdown, $booking_breakdowntech, $booking_service, $booking_price, $booking_datefix, $booking_tech);

        if ($result == true)
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
        else
        {

            $this->response(array(
                'status' => 'failed'
            ));
        }
    }

    function update_tech_put()
    {
        $booking_id = $this->put('id');
        $booking_tech = $this->put('tech');

        $result = $this
            ->wm
            ->update_tech($booking_id, $booking_tech);

        if ($result == true)
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
        else
        {

            $this->response(array(
                'status' => 'failed'
            ));
        }
    }

    function update_bookingfix_put()
    {
        $booking_id = $this->put('id');
        $booking_name = $this->put('name');
        $booking_statusfix = $this->put('statusfix');
        $booking_cashpledge = $this->put('cashpledge');
        $booking_statuscash = $this->put('statuscash');
        $booking_price = $this->put('price');
        $booking_statusprice = $this->put('statusprice');
        $booking_datefix = $this->put('datefix');
        $booking_waranty = $this->put('waranty');
        $booking_warantypro = $this->put('warantypro');
        $booking_date = $this->put('date');
        $booking_datepro = $this->put('datepro');
        $booking_breakdown = $this->put('breakdown');
        $booking_withdraw = $this->put('withdraw');
        $booking_breakdowntech = $this->put('breakdowntech');

        $result = $this
            ->wm
            ->update_bookingfix($booking_id, $booking_name, $booking_statusfix, $booking_cashpledge, $booking_statuscash, $booking_price, $booking_statusprice, $booking_datefix, $booking_waranty, $booking_warantypro, $booking_date, $booking_datepro, $booking_breakdown, $booking_withdraw, $booking_breakdowntech);

        if ($result == true)
        {
            $this->response(array(
                'status' => 'success'
            ));
        }
        else
        {

            $this->response(array(
                'status' => 'failed'
            ));
        }
    }

    function delete_booking_delete($booking_id)
    { //path parameter, example, /delete/1
        $result = $this
            ->wm
            ->delete_booking($booking_id);

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

