// import React from 'react';

// const Cleaning = () => {
//   // Sample data
//   const stats = [
//     { label: 'Total Tasks', value: 24 },
//     { label: 'Completed', value: 18 },
//     { label: 'Pending', value: 4 },
//     { label: 'In Progress', value: 2 }
//   ];

//   const tasks = [
//     {
//       id: '#1234',
//       tenant: 'xyz',
//       phone: '+1 974-567-8900',
//       address: 'Flat 4A, 123 Main St',
//       // type: 'Deep Clean',
//       status: 'Pending',
//       date: '2024-02-20'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     },
//     {
//       id: '#1235',
//       tenant: 'xyz',
//       phone: '+1 974-567-8978',
//       address: 'Flat 2B, 456 Oak Ave',
//       // type: 'Regular Clean',
//       status: 'Completed',
//       date: '2024-02-19'
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-[95%] mx-auto px-2 sm:px-6 lg:px-6 py-4">
//         <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
//           <div className="p-6">
//             {/* Stats Cards */}
//             {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow">
//                   <div className="text-sm font-medium text-gray-500">{stat.label}</div>
//                   <div className="mt-2 text-3xl font-semibold">{stat.value}</div>
//                 </div>
//               ))}
//             </div> */}

//             <div className="grid grid-cols-2 gap-9 sm:grid-cols-2 lg:grid-cols-4 w-full "> 
//           {stats.map((stat, index) => (
//              <div key={index} className="bg-white p-4 rounded-lg shadow border">
//               <div className="text-sm text-center font-medium text-gray-700">{stat.label}</div>
//               <div className="text-xl text-center font-semibold">{stat.value}</div>
//             </div>
//           ))}
//         </div>

//             {/* Tasks Table */}
//             <div className="mt-4">
//               <div className="flex justify-between items-center mb-3">
//                 <h2 className="text-md font-medium">Current Tasks</h2>
//                 <div className="flex space-x-2">
//                   <select 
//                   className="px-2 py-1 text-sm font-semibold rounded bg-gray-50 border border-gray-300"

//                 //   className="rounded-md border-gray-300 text-sm" 
//                 >
//                     <option hidden>All Status</option>
//                     <option>Pending</option>
//                     <option>Completed</option>
//                     <option>In Progress</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg border">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task ID</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant Details</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant Address</th>
//                       {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th> */}
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {tasks.map((task, index) => (
//                       <tr key={index}>
//                         <td className="px-4 py-1 whitespace-nowrap text-sm">{task.id}</td>
//                         <td className="px-4 py-1 whitespace-nowrap text-sm">
//                           <div className="text-sm text-gray-900">{task.tenant}</div>
//                           <div className="text-sm text-gray-500">{task.phone}</div>
//                         </td>
//                         <td className="px-4 py-1 whitespace-nowrap text-sm">{task.address}</td>
//                         {/* <td className="px-6 py-2 whitespace-nowrap text-sm">{task.type}</td> */}
//                         <td className="px-4 py-1 whitespace-nowrap">
//                           <select 
//                         className="px-2 py-1 text-xs rounded border border-gray-300"
//                         // className="border-gray-300 text-sm rounded-md px-4 py-1"
//                             defaultValue={task.status}
//                           >
//                             <option className="bg-red-100 text-red-800">Pending</option>
//                             <option className="bg-green-100 text-green-800">Completed</option>
//                             <option>In Progress</option>
//                           </select>
//                         </td>
//                         <td className="px-4 py-1 whitespace-nowrap text-sm">{task.date}</td>
//                         <td className="px-4 py-1 whitespace-nowrap text-sm">
//                           {/* <button className="text-green-600 hover:text-green-800">
//                            <span className="text-green-600 hover:text-green-800">&#10004;</span>
//                            </button> */}
//                            <button
//                           onClick={() => handleStatusUpdate(index)}
//                           className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-xs"
//                         >
//                           Save
//                         </button>
//                         </td>

//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cleaning;



//resposive scrollbar added

import React from 'react';

const Cleaning = () => {
  // Sample data
  const stats = [
    { label: 'Total Tasks', value: 24 },
    { label: 'Completed', value: 18 },
    { label: 'Pending', value: 4 },
    { label: 'In Progress', value: 2 }
  ];

  const tasks = [
    {
      id: '#1234',
      tenant: 'xyz',
      phone: '+1 974-567-8900',
      address: 'Flat 4A, 123 Main St',
      status: 'Pending',
      date: '2024-02-20'
    },
    {
      id: '#1235',
      tenant: 'xyz',
      phone: '+1 974-567-8978',
      address: 'Flat 2B, 456 Oak Ave',
      status: 'Completed',
      date: '2024-02-19'
    },
    {
      id: '#1236',
      tenant: 'abc',
      phone: '+1 974-567-1111',
      address: 'Flat 5C, 789 Pine Rd',
      status: 'In Progress',
      date: '2024-02-21'
    },
    {
      id: '#1237',
      tenant: 'xyz',
      phone: '+1 974-567-2222',
      address: 'Flat 3D, 321 Elm Blvd',
      status: 'Pending',
      date: '2024-02-22'
    },
    {
      id: '#1238',
      tenant: 'xyz',
      phone: '+1 974-567-3333',
      address: 'Flat 1E, 654 Maple Ln',
      status: 'Completed',
      date: '2024-02-18'
    },
    {
      id: '#1239',
      tenant: 'xyz',
      phone: '+1 974-567-4444',
      address: 'Flat 6F, 987 Cedar Dr',
      status: 'Completed',
      date: '2024-02-17'
    },
    {
      id: '#1240',
      tenant: 'xyz',
      phone: '+1 974-567-4444',
      address: 'Flat 6F, 987 Cedar Dr',
      status: 'Completed',
      date: '2024-02-17'
    }
  ];

  const handleStatusUpdate = (index) => {
    // Handle status update logic here
    console.log(`Updating status for task ${index}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 py-4">
        <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
          <div className="p-4 sm:p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow border">
                  <div className="text-xs sm:text-sm text-center font-medium text-gray-700 truncate">{stat.label}</div>
                  <div className="text-lg sm:text-xl text-center font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Tasks Table */}

            <div className="mt-4">
              <div className="flex flex-row justify-between items-center mb-4 gap-3">
                <h2 className="text-sm sm:text-md font-medium whitespace-nowrap">Current Tasks</h2>
                <div className="flex justify-end">
                  <select
                    className="px-1 py-1 text-xs sm:text-sm font-semibold rounded bg-gray-50 border border-gray-300 sm:w-auto min-w-[50px]"
                  >
                    <option hidden>All Status</option>
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>In Progress</option>
                  </select>
                </div>
              </div>


              {/* Scrollable table container */}
              <div className="w-full overflow-auto max-h-[calc(100vh-300px)] rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Task ID</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Tenant Details</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Tenant Address</th>

                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Date</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tasks.map((task, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">{task.id}</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                          <div className="text-xs sm:text-sm text-gray-900">{task.tenant}</div>
                          <div className="text-xs text-gray-500">{task.phone}</div>
                        </td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">{task.address}</td>


                        <td className="px-4 py-1 whitespace-nowrap">
                          <select
                            className="px-2 py-1 text-xs rounded border border-gray-300"
                            defaultValue={task.status}
                          >
                            <option className="bg-red-100 text-red-800">Pending</option>
                            <option className="bg-green-100 text-green-800">Completed</option>
                            <option className="bg-blue-100 text-blue-800">In Progress</option>
                          </select>
                        </td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm">{task.date}</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                          <button
                            onClick={() => handleStatusUpdate(index)}
                            className="bg-blue-500 text-white px-4 font-medium sm:px-3 py-1 rounded-md hover:bg-blue-600 text-xs"
                          >
                            Save
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleaning;







