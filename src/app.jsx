import { useState } from "react";
import Swal from "sweetalert2";
import Layout from "./layouts/AdminLayout";
import Button from "./components/Button";
const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    Swal.fire({
      title: "Tambah Mahasiswa",
      html: `
        <input id="name" class="swal2-input" placeholder="Nama Mahasiswa" />
        <input id="nim" class="swal2-input" placeholder="NIM Mahasiswa" />
      `,
      confirmButtonText: "Tambah",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const nim = document.getElementById("nim").value;
        if (!name || !nim) {
          Swal.showValidationMessage("Nama dan NIM harus diisi");
        }
        return { name, nim };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents([...students, result.value]);
        Swal.fire("Berhasil!", "Mahasiswa berhasil ditambahkan.", "success");
      }
    });
  };

  return (
    <Layout>
      <div className="space-y-4">
        <Button onClick={handleAddStudent}>Tambah Mahasiswa</Button>
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">NIM</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.nim}</td>
                  <td className="p-4 flex gap-5">
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger">Hapus</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-500">
                  Belum ada data mahasiswa.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default App;
