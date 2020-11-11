<?php

defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type');
	
	exit;
}

//required for REST API
require(APPPATH . '/libraries/REST_Controller.php');
require APPPATH . 'libraries/Format.php';
use Restserver\Libraries\REST_Controller;

class Member extends REST_Controller {
	
	function __construct() {
        parent::__construct();
        $this->load->model('Member_model', 'wm');
    }
	
	function members_get() {
        $members = $this->wm->get_member_list();

        if ($members) {
            $this->response($members, 200);
        } else {
            $this->response(array(), 200);
        }
    }

        function status_get() {
        if (!$this->get('status')) { //query parameter, example, websites?id=1
            $this->response(NULL, 400);
        }

        $member = $this->wm->get_status($this->get('status'));

        if ($member) {
            $this->response($member, 200); // 200 being the HTTP response code
        } else {
            $this->response(array(), 500);
        }
    }
      

      function get_status() {
        $members = $this->wm->get_status();

        if ($status) {
            $this->response($members, 200);
        } else {
            $this->response(array(), 200);
        }
    }
	

   function member_get() {
        if (!$this->get('id')) { //query parameter, example, members?id=1
            $this->response(NULL, 400);
        }

        $member = $this->wm->get_member($this->get('id'));

        if ($member) {
            $this->response($member, 200); // 200 being the HTTP response code
        } else {
            $this->response(array(), 500);
        }
    }


  public function tech_get($status){
   
        
        $result = $this->wm->get_tech($status);
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
			  
    }
	
	  public function login_member_post(){
   
        $member_email = $this->post('email');
        $member_password = $this->post('password');
        $decodepass = (md5($member_password));

        $result = $this->wm->login_member($member_email,$decodepass);
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
			  
    }
	
	
	
	function add_member_post() {
        $member_name = $this->post('name');
        $member_email = $this->post('email');
        $member_password = $this->post('password');
        $member_tel = $this->post('tel');
        $member_status = $this->post('status');
        $member_img_id = $this->post('img_id');
 $member_address = $this->post('address');
       $passnew = md5($member_password);
        
        $result = $this->wm->add_member($member_name, $member_email,$passnew,$member_tel,$member_status,$member_img_id,$member_address);
        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }

     function update_member_put() {
        $member_id = $this->put('id');
        $member_name = $this->put('name');
        $member_email = $this->put('email');
        $member_password = $this->put('password');
        $member_tel = $this->put('tel');
        $member_img_id = $this->put('img_id');
        $member_address = $this->put('address');
        $member_status = $this->put('status');
        $member_member_id = $this->put('member_id');
        $result = $this->wm->update_member($member_id,$member_name, $member_email,$member_password,$member_tel,$member_img_id,$member_address,$member_status,$member_member_id);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
	
	function delete_member_delete($member_id) { //path parameter, example, /delete/1

        $result = $this->wm->delete_member($member_id);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }


	
}