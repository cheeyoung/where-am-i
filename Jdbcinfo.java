//
// 13 June 2022 Updated at 09:24 UTC net.snowflake.client.jdbc.SnowflakeDriver
// 24 June 2021 com.mysql.cj.jdbc.Driver and oracle.jdbc.OracleDriver
//
import java.sql.* ;
import net.snowflake.client.jdbc.SnowflakeDriver ;
import java.io.* ;
import java.util.* ;

public class Jdbcinfo
{
  public static void main(String[] args)
  {
    java.sql.Driver drvSnowflake ;
    Properties props = System.getProperties() ;

    System.out.println(props.getProperty("java.home")) ;
    System.out.println(props.getProperty("os.name")
+ " " + props.getProperty("os.version")
+ " " + props.getProperty("os.arch")
+ "\n") ;
    System.out.println(props.getProperty("java.class.path")) ;

    /* Snowflake and MySQL */
    try {
      drvSnowflake = new net.snowflake.client.jdbc.SnowflakeDriver() ;

      System.out.println("getMajorVersion() returned " + drvSnowflake.getMajorVersion()) ;
      System.out.println("getMinorVersion() returned " + drvSnowflake.getMinorVersion()) ;
      System.out.println("jdbcCompliant() returned " + drvSnowflake.jdbcCompliant()) ;
    } catch (Exception e) {
      e.printStackTrace() ;
    } finally {
      drvSnowflake = null ;
    }

    /*
      Oracle JDBC Driver

      System.out.println("getDriverVersion() returned " + drvOracle.getDriverVersion()) ;
      System.out.println("getBuildDate() returned " + drvOracle.getBuildDate()) ;
      System.out.println("getJdbcVersion() returned " + drvOracle.getJdbcVersion()) ;
    */

    System.out.println("Press Enter to quit...") ;
    try {
      System.in.read() ;
    } catch (IOException e) {
      e.printStackTrace() ;
    }
  }
}
