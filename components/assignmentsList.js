import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function AssignmentsList() {
  return (
    <>
      {/* <div class="overflow-x-auto max-w-4xl w-full px-14">
  
</div> */}
      <section className="max-w-4xl mt-10">
        <Tabs>
          <TabList>
            <Tab>Writing</Tab>
            <Tab>Reading</Tab>
            <Tab>Vocabulary</Tab>
          </TabList>

          <TabPanel>
            <div>
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
                      <span class="badge badge-ghost badge-sm">Returned</span>
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
                    <td>Oct 3, 2022</td>
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
                          <div class="font-bold">Essay #4 Book Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 10, 2022</td>
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
                          <div class="font-bold">Essay #5 Writing Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 17, 2022</td>
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
                          <div class="font-bold">Essay #6 Book Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 24, 2022</td>
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
                          <div class="font-bold">Essay #7 Writing Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 31, 2022</td>
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
                          <div class="font-bold">Essay #8 Book Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct Nov 7, 2022</td>
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
                          <div class="font-bold">Essay #9 Writing Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct Nov 14, 2022</td>
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
                          <div class="font-bold">Essay #10 Book Topic</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct Nov 21, 2022</td>
                    <th>
                      <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Assignment</th>
                    <th>Status</th>
                    <th>Due</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
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
                          <div class="font-bold">
                            Read one-third of A Whole New Mind
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Completed
                      <br />
                      <span class="badge badge-ghost badge-sm">Returned</span>
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
                          <div class="font-bold">
                            Read two-third of A Whole New Mind
                          </div>
                          {/* <div class="text-sm opacity-50">=Essay2</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Completed
                      <br />
                      <span class="badge badge-ghost badge-sm">Returned</span>
                    </td>
                    <td>Sept 19, 2022</td>
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
                          <div class="font-bold">Finish A Whole New Mind</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">/</span> */}
                    </td>
                    <td>Sept 26, 2022</td>
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
                          <div class="font-bold">
                            Read one-third of The Color of Water
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 3, 2022</td>
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
                          <div class="font-bold">
                            Read two-thirds of The Color of Water
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 10, 2022</td>
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
                          <div class="font-bold">Finish The Color of Water</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 17, 2022</td>
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
                          <div class="font-bold">
                            Read one-third of Brave New World
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 24, 2022</td>
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
                          <div class="font-bold">
                            Read two-thirds of Brave New World
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 31, 2022</td>
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
                          <div class="font-bold">Finish of Brave New World</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 7, 2022</td>
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
                          <div class="font-bold">
                            Read one-third of A Thousand Splendid Suns
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 14, 2022</td>
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
                          <div class="font-bold">
                            Read two-thirds of A Thousand Splendid Suns
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 21, 2022</td>
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
                          <div class="font-bold">
                            Finish A Thousand Splendid Suns
                          </div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 28, 2022</td>
                    <th>
                      <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Assignment</th>
                    <th>Status</th>
                    <th>Due</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
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
                          <div class="font-bold">Unit 1</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Completed
                      <br />
                      <span class="badge badge-ghost badge-sm">Returned</span>
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
                          <div class="font-bold">Unit 2</div>
                          {/* <div class="text-sm opacity-50">=Essay2</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Completed
                      <br />
                      <span class="badge badge-ghost badge-sm">Returned</span>
                    </td>
                    <td>Sept 19, 2022</td>
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
                          <div class="font-bold">Unit 3</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">/</span> */}
                    </td>
                    <td>Sept 26, 2022</td>
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
                          <div class="font-bold">Review Units 1-3</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 3, 2022</td>
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
                          <div class="font-bold">Unit 4</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 10, 2022</td>
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
                          <div class="font-bold">Unit 5</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 17, 2022</td>
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
                          <div class="font-bold">Unit 6</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 24, 2022</td>
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
                          <div class="font-bold">Review Units 4-6</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Oct 31, 2022</td>
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
                          <div class="font-bold">Unit 7</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 7, 2022</td>
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
                          <div class="font-bold">Unit 8</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 14, 2022</td>
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
                          <div class="font-bold">Unit 9</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 21, 2022</td>
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
                          <div class="font-bold">Review Units 7-9</div>
                          {/* <div class="text-sm opacity-50">Essay</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      Not submitted
                      <br />
                      {/* <span class="badge badge-ghost badge-sm">returned</span> */}
                    </td>
                    <td>Nov 28, 2022</td>
                    <th>
                      <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Assignment</th>
                    <th>Status</th>
                    <th>Due</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}
