		<h3>Add Data</h3>
         
		 <?php 
            echo form_open('customer/save_customer');
			
            echo form_label('First Name'); 
            echo form_input(array('class'=>'form-control','name'=>'first_name')); 
            echo "<br/>"; 
			
            echo form_label('Last Name'); 
            echo form_input(array('class'=>'form-control','name'=>'last_name')); 
            echo "<br/>"; 
			
            echo form_submit(array('id'=>'submit','value'=>'Add','class'=>'btn btn-success')); 
			
			echo anchor(base_url().'index.php/customer', 'Back',array('class'=>'btn btn-default'));
			
            echo form_close(); 
         ?>