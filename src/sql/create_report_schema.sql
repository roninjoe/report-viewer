drop database if exists report_viewer;
drop database if exists report_results;
create database report_viewer;
create database report_results;

-- Create 'report' user.  Will be forced to update password later.
create user if not exists 'report'@'localhost' identified by 'report';

grant all privileges on report_viewer.* to 'report'@'localhost';
grant all privileges on report_results.* to 'report'@'localhost';

CREATE TABLE report_viewer.report (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  runDate datetime,
  PRIMARY KEY (id),
  UNIQUE KEY  (name,runDate)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into report_viewer.report (name,runDate) values ('A Report',now());
insert into report_viewer.report (name,runDate) values ('Bobs Report',now());
insert into report_viewer.report (name,runDate) values ('Carols Report',now());