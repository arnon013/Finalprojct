<h3>Title</h3>

<a href="<?php echo base_url()?>index.php/customer/add_customer_form" class="btn btn-info">ADD</a>


<table class="table table-bordered" style="margin-top:10px">
	<tr class="active">
		<th>First Name</th>
		<th>Last Name</th>
		<th width="10%">Edit</th>
		<th width="10%">Delete</th>
	</tr>
	<?php
		foreach($result as $r){
			echo "<tr>";
				echo "<td>".$r->first_name."</td>";
				
				echo "<td>".$r->last_name."</td>";
				
				echo "<td><a href='".base_url()."index.php/customer/edit_customer_form/".$r->id."' class='btn btn-warning'>Edit</a></td>";
				
				echo "<td><a href='".base_url()."index.php/customer/delete_customer/".$r->id."' onclick='return confirm(\"Confirm Delete Item\")' class='btn btn-danger'>Delete</a></td>";
				
			echo "</tr>";
		}
	?>
</table>