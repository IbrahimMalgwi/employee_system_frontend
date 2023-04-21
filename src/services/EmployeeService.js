import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
   
   saveEmployee(employee) {
      return axios.post(EMPLOYEE_API_BASE_URL, employee);
   }

   getEmployees(){
      return axios.get(EMPLOYEE_API_BASE_URL);
   }

   deleteEmployee(id) {
      return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
   }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
