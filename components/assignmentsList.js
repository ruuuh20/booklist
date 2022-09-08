export default function AssignmentsList()  {


    return (
        <>
        <div class="overflow-x-auto w-full px-14">
  <table class="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Assignment</th>
        <th>Status</th>
        <th>Due</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
           
            <div>
              <div class="font-bold">In-Class Writing</div>
              {/* <div class="text-sm opacity-50">Essay</div> */}
            </div>
          </div>
        </td>
        <td>
          Submitted
          <br />
          <span class="badge badge-ghost badge-sm">Returned</span>
        </td>
        <td>Sept 5, 2022</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
         
            <div>
              <div class="font-bold">Essay #1 Writing Topic</div>
              {/* <div class="text-sm opacity-50">=Essay2</div> */}
            </div>
          </div>
        </td>
        <td>
         Submitted
          <br />
          {/* <span class="badge badge-ghost badge-sm"></span> */}
        </td>
        <td>Sept 12, 2022</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
          
            <div>
              <div class="font-bold">Essay #2 Book Topic</div>
              {/* <div class="text-sm opacity-50">Essay</div> */}
            </div>
          </div>
        </td>
        <td>
          Not submitted
          <br />
          {/* <span class="badge badge-ghost badge-sm">/</span> */}
        </td>
        <td>Sept 18, 2022</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
        
            <div>
              <div class="font-bold">Essay #3 Writing Topic</div>
              {/* <div class="text-sm opacity-50">Essay</div> */}
            </div>
          </div>
        </td>
        <td>
         Not submitted
          <br />
          {/* <span class="badge badge-ghost badge-sm">returned</span> */}
        </td>
        <td>Sept 24, 2022</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
   
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Due</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </>

    )
}
