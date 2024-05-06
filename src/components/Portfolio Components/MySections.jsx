export const MySections = () => {
  return (
    <div>
      <section id="education" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Educational History</h2>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%' }}>
          <tr>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Sr. No.</th>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Degree Title</th>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Passing Year</th>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Total Marks</th>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Obtained Marks</th>
            <th style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Percentage</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>1</td>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>Matriculation</td>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>2018</td>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>1100</td>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>971</td>
            <td style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>87%</td>
          </tr>
          {/* Add more rows as needed */}
        </table>
      </section>

      <section id="skills" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Professional Skills</h2>
        <ol style={{ margin: '0 auto', width: '50%' }}>
          <li>Microsoft Office</li>
          <li>Voice Over</li>
          <li>Video Editing</li>
          <li>Social Media Management</li>
        </ol>
      </section>

      <section id="projects" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Professional Projects</h2>
        <ol style={{ margin: '0 auto', width: '50%' }}>
          <li>Chat Application</li>
          <li>RS Management System</li>
          <li>Content Management System</li>
        </ol>
      </section>

      <section id="hobbies" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Hobbies</h2>
        <ul style={{ margin: '0 auto', width: '50%' }}>
          <li>Movies</li>
          <li>Book Reading</li>
          <li>Social Media</li>
        </ul>
      </section>

      <section id="ambitions" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Life Ambitions</h2>
        <ul style={{ margin: '0 auto', width: '50%' }}>
          <li>
            <strong>Achieved</strong>
            <ul>
              <li>Weight Loss</li>
              <li>First Job</li>
              <li>Life Partner</li>
            </ul>
          </li>
          <li>
            <strong>Struggling</strong>
            <ul>
              <li>Raise a Million for charity</li>
              <li>Establish a Company</li>
              <li>Physical Fitness</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="efforts" style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Efforts for Country</h2>
        <ul style={{ margin: '0 auto', width: '50%' }}>
          <li>
            <strong>Succeeded</strong>
            <ul>
              <li>Red-handed Caught a thief</li>
              <li>Haram Businesses Control</li>
            </ul>
          </li>
          <li>
            <strong>Struggling</strong>
            <ul>
              <li>Play a role in Illegal Weapon Usage</li>
              <li>Excel Media Industry of Pakistan</li>
              <li>Excel Tech Industry of Pakistan</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};
