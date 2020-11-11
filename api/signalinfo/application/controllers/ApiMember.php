<?php
//require_once __DIR__ . '../../vendor/autoload.php';
defined('BASEPATH') or exit('No direct script access allowed');
date_default_timezone_set('UTC');

class ApiMember extends CI_Controller
{
    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        parent::__construct();
        $this->load->model("AuthenModel");
        $this->load->model("RegisterModel");
        $this->db = $this->load->database("default", true);

    }

    public function login()
    {
        $result = $this->AuthenModel->login($_GET['username'], $_GET['password']);
        echo json_encode($result);
    }

    public function register()
    {
        $result = $this->RegisterModel->register($_GET['username'], $_GET['password'], $_GET['email', $_GET['tel'],
                                                     $_GET['name'], $_GET['lastname']);
        echo json_encode($result);
    }

    public function getAllMember()
    {
        $result = $this->RegisterModel->getAllMember();
        echo json_encode($result);
        
    }
}