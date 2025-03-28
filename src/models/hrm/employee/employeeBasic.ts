import { DataTypes, Model } from 'sequelize';
import { BaseModel, baseModelAttributes } from '../../BaseModel';

//import { IEmployeeBasicAttributes } from '../interface/employeeInterface';

import sequelize from '../../../config/db';

export interface IEmployeeBasicAttributes {
id?: number;
emp_code?: number;
id_card_no?:string;
punch_card_no?:string;
dob?:Date;
actual_dob?:Date;
first_name: string;
last_name?: string;
nick_name?: string;
full_name_local?: string;
father_name?: string;
father_name_local?: string;
mother_name?: string;
mother_name_local?: string;
spouse_name?: string;
spouse_name_local?: string;
birth_place?: string;
religion?: number;
blood_group?: number;
marital_status?: number;
sex?: number;
nationality?: number;
national_id?: string;
passport_no?: string;
joining_date?: Date;
confirmation_date?: Date;
service_benifit_from?: number;
salary_grade?: string;
salary_rule?: number;
starting_salary?:number;
gross_salary?: number;
buyer_gross_salary?: number;
bank_gross?: number;
buyer_bank_gross?: number;
is_suspension?: number;
is_attendance?: number;
is_salary?: number;
category?: number;
company_id?: number;
location_id?: number;
division_id?: number;
department_id?: number;
section_id?: number;
subsection_id?: number;
job_location_id?: number;
unit_id?: number;
floor_id?: number;
building_id?: number;
line_id?: number;
designation_level?: number;
designation_id?: number;
skill_rank?: string;
cash_disbursement?: number;
contract_start_date?: Date;
contract_end_date?: Date;
emp_ref_code?: number;
status_active?: number;
is_deleted?: number;
is_locked?: number;
remark?: string;
is_posted_account?: number;
is_advance_applicable?: number;
confirmation_type?: number;
functional_superior?: number;
admin_superior?: number;
leave_app_authority?: number;
target_confirm_date?: Date;
provisional_tenor?: number;
is_leave_app_process_use?: number;
id_card_no_old?: string;
is_ot_req_applicable?: number;
types_of_work?: string;
birth_registration_no?: string;
ot_entitled?: number;
staff_ot_entitled?: number;
holiday_allowance_entitled?: number;
pf_entitled?: number;
gi_entitled?: number;
salary_type_entitled?: number;
overtime_policy?: number;
holiday_incentive_policy?: number;
duty_roster_policy?: number;
leave_policy?: number;
maternity_leave_policy?: number;
attendance_bonus_policy?: number;
absent_deduction_policy?: number;
late_deduction_policy?: number;
bonus_policy?: number;
tax_policy?: number;
shift_policy?: number;
tiffin_policy?: number;
allowance_policy?: number;
early_deduction_policy?: number;
hd_deduct_policy?: number;
production_bonus_policy?: number;
missing_punch_policy?: number;
service_benefit_policy?: number;
tin_no?: string;
template_id?: number;
service_book_no?: string;
height?: string;
identification_sign?: string;
candidate_id?: number;
weekend_id?: number;
is_external_transfer?: number;
is_lunch_applicable?: number;
manpower_type?: number;
office_id?: number;
incre_month?: string;
inserted_by?: number;
updated_by?: number;
}

class EmployeeBasic extends BaseModel<IEmployeeBasicAttributes> implements IEmployeeBasicAttributes {
public id!: number;
public emp_code!: number;
public id_card_no!: string;
public punch_card_no!: string;
public dob!: Date;
public actual_dob!: Date;
public first_name!: string;
public last_name!: string;
public nick_name!: string;
public full_name_local!: string;
public father_name!: string;
public father_name_local!: string;
public mother_name!: string;
public mother_name_local!: string;
public spouse_name!: string;
public spouse_name_local!: string;
public birth_place!: string;
public religion!: number;
public blood_group!: number;
public marital_status!: number;
public sex!: number;
public nationality!: number;
public national_id!: string;
public passport_no!: string;
public joining_date!: Date;
public confirmation_date!: Date;
public service_benifit_from!: number;
public salary_grade!: string;
public salary_rule!: number;
public starting_salary!: number;
public gross_salary!: number;
public buyer_gross_salary!: number;
public bank_gross!: number;
public buyer_bank_gross!: number;
public is_suspension!: number;
public is_attendance!: number;
public is_salary!: number;
public category!: number;
public company_id!: number;
public location_id!: number;
public division_id!: number;
public department_id!: number;
public section_id!: number;
public subsection_id!: number;
public job_location_id!: number;
public unit_id!: number;
public floor_id!: number;
public building_id!: number;
public line_id!: number;
public designation_level!: number;
public designation_id!: number;
public skill_rank!: string;
public cash_disbursement!: number;
public contract_start_date!: Date;
public contract_end_date!: Date;
public emp_ref_code!: number;
public status_active!: number;
public is_deleted!: number;
public is_locked!: number;
public remark!: string;
public is_posted_account!: number;
public is_advance_applicable!: number;
public confirmation_type!: number;
public functional_superior!: number;
public admin_superior!: number;
public leave_app_authority!: number;
public target_confirm_date!: Date;
public provisional_tenor!: number;
public is_leave_app_process_use!: number;
public id_card_no_old!: string;
public is_ot_req_applicable!: number;
public types_of_work!: string;
public birth_registration_no!: string;
public ot_entitled!: number;
public staff_ot_entitled!: number;
public holiday_allowance_entitled!: number;
public pf_entitled!: number;
public gi_entitled!: number;
public salary_type_entitled!: number;
public overtime_policy!: number;
public holiday_incentive_policy!: number;
public duty_roster_policy!: number;
public leave_policy!: number;
public maternity_leave_policy!: number;
public attendance_bonus_policy!: number;
public absent_deduction_policy!: number;
public late_deduction_policy!: number;
public bonus_policy!: number;
public tax_policy!: number;
public shift_policy!: number;
public tiffin_policy!: number;
public allowance_policy!: number;
public early_deduction_policy!: number;
public hd_deduct_policy!: number;
public production_bonus_policy!: number;
public missing_punch_policy!: number;
public service_benefit_policy!: number;
public tin_no!: string;
public template_id!: number;
public service_book_no!: string;
public height!: string;
public identification_sign!: string;
public candidate_id!: number;
public weekend_id!: number;
public is_external_transfer!: number;
public is_lunch_applicable!: number;
public manpower_type!: number;
public office_id!: number;
public incre_month!: string;
public inserted_by!: number;
public updated_by!: number;

}

  EmployeeBasic.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      emp_code: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: true },
      id_card_no: { type: DataTypes.STRING(20), allowNull: false },
      punch_card_no: { type: DataTypes.STRING(20), allowNull: false , defaultValue: '0000000000'},
	  dob: { type: DataTypes.DATE, allowNull: false },
	  actual_dob: { type: DataTypes.DATE, allowNull: true },
	  first_name: { type: DataTypes.STRING(100), allowNull: false },
	  last_name: { type: DataTypes.STRING(100), allowNull: true },
	  nick_name: { type: DataTypes.STRING(100), allowNull: true },
	  full_name_local: { type: DataTypes.STRING(100), allowNull: true },
	  father_name: { type: DataTypes.STRING(100), allowNull: true },
	  father_name_local: { type: DataTypes.STRING(100), allowNull: true },
	  mother_name: { type: DataTypes.STRING(100), allowNull: true },
	  mother_name_local: { type: DataTypes.STRING(100), allowNull: true },
	  spouse_name: { type: DataTypes.STRING(100), allowNull: true },
	  spouse_name_local: { type: DataTypes.STRING(100), allowNull: true },
	  birth_place: { type: DataTypes.STRING(64), allowNull: true },
	  religion: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  blood_group: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  marital_status: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  sex: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  nationality: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  national_id: { type: DataTypes.STRING(50), allowNull: true },
	  passport_no: { type: DataTypes.STRING(50), allowNull: true },
	  joining_date: { type: DataTypes.DATE, allowNull: false },
	  confirmation_date: { type: DataTypes.DATE, allowNull: true },
	  service_benifit_from: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  salary_grade: { type: DataTypes.STRING(20), allowNull: true },
	  salary_rule: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  starting_salary: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  gross_salary: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  buyer_gross_salary: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  bank_gross: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  buyer_bank_gross: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  is_suspension: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  is_attendance: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  is_salary: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  category: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  company_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  location_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  division_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  department_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  section_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  subsection_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  job_location_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  unit_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  floor_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  building_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  line_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  designation_level: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  designation_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0},
	  skill_rank: { type: DataTypes.STRING(50), allowNull: true },
	  cash_disbursement: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  contract_start_date: { type: DataTypes.DATE, allowNull: true },
	  contract_end_date: { type: DataTypes.DATE, allowNull: true },
	  emp_ref_code: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: true },
	  is_locked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  remark: { type: DataTypes.STRING(100), allowNull: true },
	  is_posted_account: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  is_advance_applicable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  confirmation_type: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  functional_superior: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: true , defaultValue: 0},
	  admin_superior: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: true , defaultValue: 0},
	  leave_app_authority: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: true , defaultValue: 0},
	  target_confirm_date: { type: DataTypes.DATE, allowNull: true },
	  provisional_tenor: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: true , defaultValue: 0},
	  is_leave_app_process_use: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  id_card_no_old: { type: DataTypes.STRING(20), allowNull: true },
	  is_ot_req_applicable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  types_of_work: { type: DataTypes.STRING(50), allowNull: true },
	  birth_registration_no: { type: DataTypes.STRING(20), allowNull: true },
	  ot_entitled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  staff_ot_entitled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  holiday_allowance_entitled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  pf_entitled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  gi_entitled: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  salary_type_entitled: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  overtime_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  holiday_incentive_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  duty_roster_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  leave_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  maternity_leave_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  attendance_bonus_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  absent_deduction_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  late_deduction_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  bonus_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  tax_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  shift_policy: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  tiffin_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  allowance_policy: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  early_deduction_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  hd_deduct_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  production_bonus_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  missing_punch_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  service_benefit_policy: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  tin_no: { type: DataTypes.STRING(20), allowNull: true },
	  template_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  service_book_no: { type: DataTypes.STRING(50), allowNull: true },
	  height: { type: DataTypes.STRING(30), allowNull: true },
	  identification_sign: { type: DataTypes.STRING(100), allowNull: true },
	  candidate_id: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  weekend_id: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  is_external_transfer: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  is_lunch_applicable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
	  manpower_type: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  office_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  incre_month: { type: DataTypes.STRING(30), allowNull: true },
	  //inserted_by: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0 },
	  //updated_by: { type: DataTypes.MEDIUMINT.UNSIGNED, allowNull: false, defaultValue: 0 },

      ...baseModelAttributes,
      
    },
    { sequelize, modelName: 'hrm_employee', timestamps: true }
  );

  // afterCreate hook: set emp_code to the generated id if not already set
EmployeeBasic.afterCreate(async (employee, options) => {
 // console.log(employee);
  //console.log(options);
  // Check if emp_code is not already set
  if (!employee.emp_code) {
    employee.emp_code = employee.id;
    // Save the updated record; ensure you pass along the transaction if needed
    await employee.save({ transaction: options.transaction });
  }
});


// After creation: set inserted_by and updated_by from options.userId
EmployeeBasic.beforeCreate((employee, options: any) => {
  if (options.userId) {
    employee.inserted_by = options.userId;
    //employee.updated_by = options.userId;
  }
});

// Before update: set updated_by from options.userId
EmployeeBasic.beforeUpdate((employee, options: any) => {
  if (options.userId) {
    employee.updated_by = options.userId;
  }
});
// EmployeeBasic.afterUpdate((employee, options: any) => {
//   if (options.userId) {
//     employee.updated_by = options.userId;
//   }
// });
  export default EmployeeBasic;