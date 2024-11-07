CREATE DATABASE VRMS;
USE VRMS;

CREATE TABLE customer (
    c_no BIGINT PRIMARY KEY,
    c_name VARCHAR(50) NOT NULL,
    c_lic_no VARCHAR(20) NOT NULL,
    c_DOB DATE NOT NULL,
    c_aadhar VARCHAR(12) NOT NULL,
    c_email VARCHAR(50),
    c_state VARCHAR(30),
    c_city VARCHAR(30),
    c_street VARCHAR(50),
    c_pin VARCHAR(6),
    c_gender CHAR(1) NOT NULL,
    c_password VARCHAR(255) NOT NULL,
    CONSTRAINT chk_email_customer CHECK (c_email LIKE '%_@__%.__%')
);

INSERT INTO customer (c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password)
VALUES 
(9988776655, 'John Doe', 'MH12345678', '1990-04-15', '123412341234', 'john.doe@example.com', 'Maharashtra', 'Mumbai', 'Street 1', '400001', 'M', 'pass123'),
(9988776656, 'Jane Smith', 'DL87654321', '1992-06-10', '567856785678', 'jane.smith@example.com', 'Delhi', 'New Delhi', 'Street 2', '110001', 'F', 'pass456'),
(9988776657, 'Rahul Kumar', 'UP12309876', '1989-02-20', '876587658765', 'rahul.kumar@example.com', 'Uttar Pradesh', 'Lucknow', 'Street 3', '226001', 'M', 'pass789'),
(9988776658, 'Megha Singh', 'RJ65432109', '1991-11-25', '098709870987', 'megha.singh@example.com', 'Rajasthan', 'Jaipur', 'Street 4', '302001', 'F', 'pass101'),
(9988776659, 'Amit Verma', 'WB09876543', '1993-08-05', '543254325432', 'amit.verma@example.com', 'West Bengal', 'Kolkata', 'Street 5', '700001', 'M', 'pass202');

CREATE TABLE owner (
    o_no BIGINT PRIMARY KEY,
    o_name VARCHAR(50) NOT NULL,
    o_DOB DATE NOT NULL,
    o_aadhar VARCHAR(12) NOT NULL,
    o_email VARCHAR(50),
    o_state VARCHAR(30),
    o_city VARCHAR(30),
    o_street VARCHAR(50),
    o_pin VARCHAR(6),
    o_gender CHAR(1) NOT NULL,
    o_password VARCHAR(255) NOT NULL,
    CONSTRAINT chk_email_owner CHECK (o_email LIKE '%_@__%.__%')
);


INSERT INTO owner (o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password)
VALUES 
(9888776655, 'Vikram Patel', '1980-01-15', '111122223333', 'vikram.patel@example.com', 'Gujarat', 'Ahmedabad', 'Street 10', '380001', 'M', 'own123'),
(9788776655, 'Sneha Roy', '1985-03-25', '222233334444', 'sneha.roy@example.com', 'Maharashtra', 'Pune', 'Street 11', '411001', 'F', 'own456'),
(9688776655, 'Rajesh Yadav', '1978-07-30', '333344445555', 'rajesh.yadav@example.com', 'Bihar', 'Patna', 'Street 12', '800001', 'M', 'own789'),
(9588776655, 'Kiran Agarwal', '1983-09-10', '444455556666', 'kiran.agarwal@example.com', 'Delhi', 'New Delhi', 'Street 13', '110002', 'F', 'own101'),
(9488776655, 'Anil Sharma', '1975-05-20', '555566667777', 'anil.sharma@example.com', 'Haryana', 'Gurgaon', 'Street 14', '122001', 'M', 'own202');

CREATE TABLE vehicle (
    v_insurance VARCHAR(30) PRIMARY KEY,
    v_name VARCHAR(50) NOT NULL,
    v_type VARCHAR(20) NOT NULL,
    v_rto VARCHAR(20),
    v_color VARCHAR(20),
    v_mileage DECIMAL(5, 2),
    v_engine_type VARCHAR(20),
    o_no BIGINT,
    v_image VARCHAR(100),
    v_booked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (o_no) REFERENCES owner(o_no) ON DELETE SET NULL
);

INSERT INTO vehicle (v_insurance, v_name, v_type, v_rto, v_color, v_mileage, v_engine_type, o_no, v_image, v_booked)
VALUES 
('INS12345', 'Honda City', 'Car', 'MH14A1234', 'Red', 15.5, 'Petrol', 9888776655, 'honda_city.png', FALSE),
('INS54321', 'Toyota Innova', 'SUV', 'DL8C4321', 'Blue', 12.0, 'Diesel', 9788776655, 'toyota_innova.png', FALSE),
('INS67890', 'Maruti Swift', 'Car', 'UP32B5678', 'White', 18.2, 'Petrol', 9688776655, 'maruti_swift.png', TRUE),
('INS98765', 'Hyundai Creta', 'SUV', 'RJ14D8765', 'Black', 14.5, 'Diesel', 9588776655, 'hyundai_creta.png', TRUE),
('INS45678', 'Mahindra Scorpio', 'SUV', 'WB20E1234', 'Red', 11.5, 'Diesel', 9488776655, 'mahindra_scorpio.png', FALSE);

CREATE TABLE vehicle_category (
    v_type VARCHAR(20) PRIMARY KEY,
    v_capacity INT,
    v_fuel_type VARCHAR(20)
);

INSERT INTO vehicle_category (v_type, v_capacity, v_fuel_type)
VALUES 
('Car', 5, 'Petrol'),
('SUV', 7, 'Diesel'),
('Bike', 2, 'Petrol'),
('Truck', 2, 'Diesel'),
('Van', 8, 'Diesel');

CREATE TABLE booking (
    b_id INT AUTO_INCREMENT PRIMARY KEY,
    b_location VARCHAR(50),
    c_no BIGINT,
    v_insurance VARCHAR(30),
    b_date DATE,
    b_time TIME,
    b_pay DECIMAL(10, 2),
    b_return_date DATE,
    b_return_time TIME,
    b_pickup VARCHAR(50),
    b_cancel BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (c_no) REFERENCES customer(c_no) ON DELETE SET NULL,
    FOREIGN KEY (v_insurance) REFERENCES vehicle(v_insurance) ON DELETE SET NULL,
    INDEX idx_customer_no (c_no),
    INDEX idx_vehicle_insurance (v_insurance)
);

INSERT INTO booking (b_location, c_no, v_insurance, b_date, b_time, b_pay, b_return_date, b_return_time, b_pickup, b_cancel)
VALUES 
('Mumbai', 9988776655, 'INS12345', '2024-09-01', '10:00:00', 5000.00, '2024-09-07', '09:00:00', 'Street 1', FALSE),
('New Delhi', 9988776656, 'INS54321', '2024-09-02', '12:00:00', 6000.00, '2024-09-08', '11:00:00', 'Street 2', FALSE),
('Lucknow', 9988776657, 'INS67890', '2024-09-03', '14:00:00', 4000.00, '2024-09-09', '13:00:00', 'Street 3', FALSE),
('Jaipur', 9988776658, 'INS98765', '2024-09-04', '16:00:00', 5500.00, '2024-09-10', '15:00:00', 'Street 4', FALSE),
('Kolkata', 9988776659, 'INS45678', '2024-09-05', '18:00:00', 6500.00, '2024-09-11', '17:00:00', 'Street 5', FALSE);

CREATE TABLE bill (
    b_id INT PRIMARY KEY,
    tran_id VARCHAR(20),
    pay_mode VARCHAR(20),
    bill_time TIME,
    bill_total_pay DECIMAL(10, 2),
    bill_date DATE,
    bill_gst DECIMAL(5, 2),
    bill_discount DECIMAL(5, 2),
    late_fee DECIMAL(5, 2),
    payment_status VARCHAR(20),
    FOREIGN KEY (b_id) REFERENCES booking(b_id) ON DELETE CASCADE,
    CONSTRAINT unique_tran_id UNIQUE(tran_id)
);

INSERT INTO bill (b_id, tran_id, pay_mode, bill_time, bill_total_pay, bill_date, bill_gst, bill_discount, late_fee, payment_status)
VALUES 
(1, 'TX123456', 'Card', '09:30:00', 5500.00, '2024-09-07', 18.00, 0.00, 0.00, 'Paid'),
(2, 'TX789012', 'Cash', '11:30:00', 6600.00, '2024-09-08', 18.00, 0.00, 0.00, 'Paid'),
(3, 'TX345678', 'UPI', '13:30:00', 4200.00, '2024-09-09', 18.00, 0.00, 50.00, 'Paid'),
(4, 'TX901234', 'Card', '15:30:00', 6000.00, '2024-09-10', 18.00, 0.00, 0.00, 'Paid'),
(5, 'TX567890', 'Cash', '17:30:00', 7200.00, '2024-09-11', 18.00, 0.00, 0.00, 'Paid');

CREATE TABLE customer_feedback (
    feed_id INT AUTO_INCREMENT PRIMARY KEY,
    c_no BIGINT,
    f_detail TEXT,
    FOREIGN KEY (c_no) REFERENCES customer(c_no) ON DELETE SET NULL
);

INSERT INTO customer_feedback (c_no, f_detail)
VALUES 
(9988776655, 'Excellent service and car condition.'),
(9988776655, 'Good overall experience but could be better.'),
(9988776656, 'Satisfied with the vehicle and service.'),
(9988776656, 'Vehicle pickup was a bit delayed.'),
(9988776659, 'Loved the quick service and easy booking.');

CREATE TABLE owner_feedback (
    feed_id INT AUTO_INCREMENT PRIMARY KEY,
    o_no BIGINT,
    f_detail TEXT,
    FOREIGN KEY (o_no) REFERENCES owner(o_no) ON DELETE SET NULL
);

INSERT INTO owner_feedback (o_no, f_detail)
VALUES 
(9888776655, 'Great responsiveness and vehicle quality.'),
(9788776655, 'Very professional and helpful staff.'),
(9688776655, 'Impressed with the maintenance of the vehicles.'),
(9588776655, 'Service was efficient and booking process was smooth.'),
(9488776655, 'Prompt and reliable service, will recommend to others.');


CREATE TABLE customer_complaint (
    comp_id INT AUTO_INCREMENT PRIMARY KEY,
    c_no BIGINT,
    c_detail TEXT,
    FOREIGN KEY (c_no) REFERENCES customer(c_no) ON DELETE SET NULL
);


INSERT INTO customer_complaint (c_no, c_detail)
VALUES 
(9988776655, 'Car was not clean.'),
(9988776655, 'Faced issue with payment mode.'),
(9988776656, 'Late delivery of vehicle.'),
(9988776656, 'Fuel was not full.'),
(9988776659, 'Customer support was not responsive.');

CREATE TABLE owner_complaint (
    comp_id INT AUTO_INCREMENT PRIMARY KEY,
    o_no BIGINT,
    c_detail TEXT,
    FOREIGN KEY (o_no) REFERENCES owner(o_no) ON DELETE SET NULL
);

INSERT INTO owner_complaint (o_no, c_detail)
VALUES 
(9888776655, 'Vehicle maintenance was not performed on time.'),
(9788776655, 'Miscommunication about booking details.'),
(9588776655, 'Issues with vehicle cleanliness upon return.'),
(9488776655, 'Incorrect billing amount.'),
(9688776655, 'Vehicle registration issues.');


CREATE TABLE maintenance (
    main_id INT AUTO_INCREMENT PRIMARY KEY,
    v_insurance VARCHAR(30),
    main_date DATE,
    main_time TIME,
    main_type VARCHAR(50),
    FOREIGN KEY (v_insurance) REFERENCES vehicle(v_insurance) ON DELETE SET NULL
);

INSERT INTO maintenance (v_insurance, main_date, main_time, main_type)
VALUES 
('INS12345', '2024-08-25', '09:00:00', 'Oil change'),
('INS54321', '2024-08-26', '10:00:00', 'Tire replacement'),
('INS67890', '2024-08-27', '11:00:00', 'Engine check'),
('INS98765', '2024-08-28', '12:00:00', 'Brake pads replacement'),
('INS45678', '2024-08-29', '13:00:00', 'Battery replacement');
