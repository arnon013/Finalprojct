<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Booking_model extends CI_Model
{

    private $booking = 'booking';
    private $booking_detail = 'booking_detail';
    function get_booking_list()
    {
        $query = $this
            ->db
            ->get($this->booking);
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_booking($id)
    {
        $query = $this
            ->db
            ->select('`booking.id` as `id`,
            `products.id`  as `p_id`, 
            `cus`,
            `date`,
            `breakdown`,
            `booking.name` as `bookname`,
            `statusbook`,
            `breakdowntech`,
            `booking.price` as `bookprice`,
            `tech`,
            `datefix`,
            `service`,
            `withdraw`,
            `statusfix`,
            `cashpledge`,
            `statuscash`,
            `statusprice`,
            `datepro`,
            `booking.waranty` as `book_waranty`,
            `warantypro`,
            `book_img`,
            `count`,
            `product_id`,
            `products.name` as `name` ,
            `booking_id`,
            `description`,
            `category_id`,
            `products.price` as  `price`,
            `qty`,
            `created`,
            `img`')
            ->from("booking")
            ->join('booking_detail', 'booking_detail.booking_id = booking.id', 'inner')
            ->join('products', 'products.id = booking_detail.product_id')
            ->where("booking.id", $id)->get();
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

 function get_book($id)
    {
        $query = $this
            ->db
            ->get_where($this->booking, array(
            "id" => $id
        ));
        if ($query)
        {
            return $query->row();
        }
        return NULL;
    }

    function get_cus($cus)
    {
        $query = $this
            ->db
            ->get_where($this->booking, array(
            "cus" => $cus
        ));
        if ($query)
        {
            return $query->result();
        }
        return NULL;

    }

    function get_tech($tech)
    {
        $query = $this
            ->db
            ->get_where($this->booking, array(
            "tech" => $tech
        ));
        if ($query)
        {
            return $query->result();
        }
        return NULL;

    }

    function add_booking($booking_cus, $booking_date, $booking_breakdown, $booking_name, $booking_statusbook, $booking_breakdowntech, $booking_price, $booking_tech, $booking_withdraw, $booking_service, $booking_booking_img)
    {
        $Icon = time() . '.png';
        $data = array(
            'cus' => $booking_cus,
            'date' => $booking_date,
            'breakdown' => $booking_breakdown,
            'name' => $booking_name,
            'statusbook' => $booking_statusbook,
            'breakdowntech' => $booking_breakdowntech,
            'price' => $booking_price,
            'tech' => $booking_tech,
            'withdraw' => $booking_withdraw,
            'service' => $booking_service
        );
        $this
            ->db
            ->insert($this->booking, $data);
        $insert_id = $this
            ->db
            ->insert_id();

        $dataI = $booking_booking_img;
        $img_array = explode(';', $dataI);
        $img_array2 = explode(",", $img_array[1]);
        $dataI = base64_decode($img_array2[1]);

        $path = "imgbooking/$insert_id";
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
            ->update($this->booking, ["book_img" => $path]);
    }

    function update_booktech($booking_id, $booking_date, $booking_name, $booking_breakdown, $booking_breakdowntech, $booking_price, $booking_datefix, $booking_withdraw, $booking_service,$booking_statusbook, $booking_detail, $booking_booking_id)
    {

        $data = array(
            'id' => $booking_id,
            'date' => $booking_date,
            'name' => $booking_name,
            'breakdown' => $booking_breakdown,
            'breakdowntech' => $booking_breakdowntech,
            'price' => $booking_price,
            'datefix' => $booking_datefix,
            'withdraw' => $booking_withdraw,
            'service' => $booking_service,
            'statusbook' => $booking_statusbook
        );
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->update($this->booking, $data);
        $this
            ->db
            ->where('booking_id', $booking_booking_id);
        $this
            ->db
            ->delete($this->booking_detail);
        foreach ($booking_detail as $i)
        {
            $data = array(
                'product_id' => $i['id'],
                'booking_id' => $booking_booking_id,
                'count' => $i['count'],
                'price' => $i['price']
            );
            $this
                ->db
                ->insert($this->booking_detail, $data);
        }
    }

    function update_booking($booking_id, $booking_date, $booking_name, $booking_breakdown, $booking_breakdowntech, $booking_price, $booking_datefix, $booking_withdraw, $booking_service,$booking_book_img)
    {
 $Icon = time() . '.png';
        $data = array(
            'id' => $booking_id,
            'date' => $booking_date,
            'name' => $booking_name,
            'breakdown' => $booking_breakdown,
            'breakdowntech' => $booking_breakdowntech,
            'price' => $booking_price,
            'datefix' => $booking_datefix,
            'withdraw' => $booking_withdraw,
            'service' => $booking_service
        );
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->update($this->booking, $data);

  $dataI = $booking_book_img;
        $img_array = explode(';', $dataI);
        $img_array2 = explode(",", $img_array[1]);
        $dataI = base64_decode($img_array2[1]);

        $path = "imgbooking/$booking_id";
        if (!is_dir($path))
        {
            mkdir($path, 0777, true);

        }
        $path .= "/$Icon";
        file_put_contents($path, $dataI);
        $this
            ->db
            ->where('id', $booking_id);

        $this
            ->db
            ->update($this->booking, ["book_img" => $path]);
    }

    function update_statusbook($booking_id, $booking_statusbook, $booking_name, $booking_date, $booking_breakdown, $booking_breakdowntech, $booking_service, $booking_price, $booking_datefix, $booking_tech)
    {
        $data = array(
            'id' => $booking_id,
            'statusbook' => $booking_statusbook,
            'name' => $booking_name,
            'date' => $booking_date,
            'breakdown' => $booking_breakdown,
            'breakdowntech' => $booking_breakdowntech,
            'service' => $booking_service,
            'price' => $booking_price,
            'datefix' => $booking_datefix,
            'tech' => $booking_tech
        );
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->update($this->booking, $data);
    }

    function update_tech($booking_id, $booking_tech)
    {
        $data = array(
            'id' => $booking_id,
            'tech' => $booking_tech
        );
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->update($this->booking, $data);
    }

    function update_bookingfix($booking_id, $booking_name, $booking_statusfix, $booking_cashpledge, $booking_statuscash, $booking_price, $booking_statusprice, $booking_datefix, $booking_waranty, $booking_warantypro, $booking_date, $booking_datepro, $booking_breakdown, $booking_withdraw, $booking_breakdowntech)
    {
        $data = array(
            'id' => $booking_id,
            'name' => $booking_name,
            'statusfix' => $booking_statusfix,
            'cashpledge' => $booking_cashpledge,
            'statuscash' => $booking_statuscash,
            'price' => $booking_price,
            'statusprice' => $booking_statusprice,
            'datefix' => $booking_datefix,
            'waranty' => $booking_waranty,
            'warantypro' => $booking_warantypro,
            'date' => $booking_date,
            'datepro' => $booking_datepro,
            'breakdown' => $booking_breakdown,
            'withdraw' => $booking_withdraw,
            'breakdowntech' => $booking_breakdowntech
        );
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->update($this->booking, $data);
    }

    function delete_booking($booking_id)
    {
        $this
            ->db
            ->where('id', $booking_id);
        $this
            ->db
            ->delete($this->booking);
    }

}

