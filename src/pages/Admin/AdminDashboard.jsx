import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient'; 

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('RootAdmin') === '0') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setLoading(false); 
    }
  }, []);

  const fetchData = async () => {
    const { data: submissions, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error("Error fetching data:", error);
    else setData(submissions);
    setLoading(false);
  };

  if (!isAuthenticated && !loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0715] text-white">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#0a0715] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {loading ? <p>Loading...</p> : (
        <table className="w-full border-collapse border border-white/10">
          <thead>
            <tr className="bg-white/5">
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Message/Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-white/10">
                <td className="p-3">{item.name || '-'}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.form_type}</td>
                <td className="p-3">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}