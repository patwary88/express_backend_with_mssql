import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { LibPolicyShiftService } from '../../../../services/hrm/attendance/library/LibPolicyShiftService';

export class libPoichShiftController {

    public libPolicyShiftService: LibPolicyShiftService;
    
      constructor() {
        this.libPolicyShiftService = new LibPolicyShiftService();
      }

      funcLibPolicyShiftEntry = async (req: Request, res: Response): Promise<void> => {
        const errors = validationResult(req);
        //console.log(req);return;
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        try{
          const currentUserId = (req as any).user.id;
          const libPolicyData = req.body;
          //console.log(libPolicyData);return;

            const resLibPolicyData = await this.libPolicyShiftService.funcLibPolicyShiftEntry(libPolicyData, currentUserId);
            res.status(201).json(resLibPolicyData);

        }catch (error: any) {
          res.status(500).json({ message: error.message });
        }
    }

  //   funcGetEmployeeByEmpCode = async (req: Request, res: Response): Promise<void> => {
     

  //     const errors = validationResult(req);
  //     if (!errors.isEmpty()) {
  //       res.status(400).json({ errors: errors.array() });
  //       return;
  //     }
  //     try {

  //       const { emp_code } = req.body;
  //       const employee = await this.libPolicyShiftService.funcGetEmployeeByEmpCode(emp_code);       
  //       res.status(200).json( {employee} );

  //     }catch (error: any) {
  //       res.status(500).json({ message: error.message });
  //     }
      
  //   }


  //   funcGetAllEmployee = async (req: Request, res: Response): Promise<void> => {
  //     try {
  //       const employees = await this.libPolicyShiftService.getAllEmployees();
  //       res.json(employees);
  //     } catch (error: any) {
  //       res.status(500).json({ message: error.message });
  //     }
  //   };


  //    // Update an employee
  //   funcUpdateEmployee = async (req: Request, res: Response): Promise<void> => {
  //   try {

  //     const emp_code = parseInt(req.params.emp_code, 10);
  //       if (isNaN(emp_code)) {
  //         res.status(400).json({ message: 'Invalid employee code' });
  //         return;
  //     }

  //     const currentUserId = (req as any).user.id;
      
  //     const updateData = req.body;
  //     updateData.updated_by = currentUserId;
      
  //     const employee = await this.libPolicyShiftService.updateEmployee(emp_code, updateData);
  //     if (employee) {
  //       res.json(employee);
  //     } else {
  //       res.status(404).json({ message: 'Employee not found' });
  //     }
  //   } catch (error: any) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };


  //   funcdeleteEmployee = async (req: Request, res: Response): Promise<void> => {
  //     try {
  //       const emp_code = parseInt(req.params.emp_code, 10);

  //       if (isNaN(emp_code)) {
  //         res.status(400).json({ message: 'Invalid employee code' });
  //         return;
  //     }

  //       const deleted = await this.libPolicyShiftService.deleteEmployee(emp_code);
  //       if (deleted) {
  //         res.json({ message: 'Employee deleted successfully' });
  //       } else {
  //         res.status(404).json({ message: 'Employee not found' });
  //       }
  //     } catch (error: any) {
  //       res.status(500).json({ message: error.message });
  //     }
  //   };
    
    
}