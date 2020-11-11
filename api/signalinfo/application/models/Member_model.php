<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Member_model extends CI_Model
{

    private $member = 'member';

    function get_member_list()
    {
        $query = $this
            ->db
            ->get($this->member);
        if ($query)
        {
            return $query->result();
        }
        return NULL;
    }

    function get_member($id)
    {
        $query = $this
            ->db
            ->get_where($this->member, array(
            "id" => $id
        ));
        if ($query)
        {
            return $query->row();
        }
        return NULL;
    }

    function get_status($status)
    {
        $query = $this
            ->db
            ->get_where($this->member, array(
            "status" => $status
        ));
        if ($query)
        {
            return $query->result();
        }
        return NULL;

    }

    public function login_member($member_email, $member_password)
    {

        $sql = "SELECT *
        FROM member
        WHERE email='" . $member_email . "'
        AND password ='" . ($member_password) . "' ";

        $query = $this
            ->db
            ->query($sql);
        $result = $query->result();
        //print_r( $result);
        $rows = count($query->result());
        if ($rows > 0)
        {
            return $result;

        }
        else
        {
            return $rs = array(
                ["regis_code" => "",
                "name" => "",
                "last_name" => "",
                ]
            );
        }

    }

    function add_member($member_name, $member_email, $member_password, $member_tel, $member_status, $member_img_id, $member_address)
    {
        $data = array(
            'name' => $member_name,
            'email' => $member_email,
            'tel' => $member_tel,
            'password' => $member_password,
            'status' => $member_status,
            'img_id' => $member_img_id,
            'address' => $member_address
        );
        $this
            ->db
            ->insert($this->member, $data);
    }

    function update_member($member_id, $member_name, $member_email, $member_password, $member_tel, $member_img_id, $member_address, $member_status,$member_member_id)
    {
        $Icon = time() . '.png';
        $data = array(
            'name' => $member_name,
            'email' => $member_email,
            'tel' => $member_tel,
            'password' => $member_password,
            'address' => $member_address,
            'status' => $member_status
        );
        $this
            ->db
            ->where('id', $member_id);
        $this
            ->db
            ->update($this->member, $data);
            
             $dataI = $member_img_id;
        $img_array = explode(';', $dataI);
        $img_array2 = explode(",", $img_array[1]);
        $dataI = base64_decode($img_array2[1]);

        $path = "imgprofile/$member_member_id";
        if (!is_dir($path))
        {
            mkdir($path, 0777, true);

        }
        $path .= "/$Icon";
        file_put_contents($path, $dataI);
        $this
            ->db
            ->where('id', $member_member_id);

        $this
            ->db
            ->update($this->member, ["img_id" => $path]);
    }

    function delete_member($member_id)
    {
        $this
            ->db
            ->where('id', $member_id);
        $this
            ->db
            ->delete($this->member);
    }

}

