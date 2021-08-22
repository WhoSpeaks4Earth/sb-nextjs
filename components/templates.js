
const Templates = () => {
    return (
        <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Income Statement</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Personal Finance</td>
                  <td>Free</td>
                  <td>
                    <a href="https://docs.google.com/spreadsheets/d/1zZeXuPeqJY1dTKuuXsnzkY0rf9zAkRZUvatdzWLnDdA/edit?usp=sharing" target="_blank"  className="link-secondary">
                      {/* <DownloadIcon /> */}
                      {/* <BoxArrowRightIcon /> */}
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Balance Sheet</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Personal Finance</td>
                  <td>Free</td>
                  <td>
                  <a href="https://docs.google.com/spreadsheets/d/19iRQvsKRrEu7EUkn-x_p0DcsTGTbnav_u773Q7dTOww/edit?usp=sharing" className="link-secondary">
                    View
                  </a>
                  </td>
                </tr>
                <tr>
                  <td>Amortization Sheet</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Home Mortgage</td>
                  <td>$0.99</td>
                  <td>
                  {/* <a href="#" className="link-secondary">
                    coming soon
                  </a> */}
                  coming soon
                  </td>
                </tr>
                <tr>
                  <td>All-in-one</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Finances</td>
                  <td>$1.99</td>
                  <td>
                  {/* <a href="#" className="link-secondary">
                    coming soon
                  </a> */}
                  coming soon
                  </td>
                </tr>
              </tbody>
            </table>
    )
}

export default Templates