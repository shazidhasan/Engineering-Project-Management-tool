#region History
/* --------------------------------------------------------------------------------
 * Client Name: National Quality Forum
 * Project Name: OPLM
 * Module: Web
 * Name: NullHandler.cs
 * Purpose: for NullHandler related work
 *                   
 * Author: HA
 * Language: C# SDK version 2.0
 * --------------------------------------------------------------------------------
 * Change History:
 *  version: 1.0    AFS  01/10/09
 *  Description: Initial Development
 * -------------------------------------------------------------------------------- */
#endregion 

using System;
using System.Data;

namespace ProducteevLikeSite.Repository
{
    /// <summary>
    /// For NullHandler related work
    /// </summary>
    public class NullHandler
    {
        #region CONSTRUCTOR(S)
        #endregion CONSTRUCTOR(S)

        /// <summary>
        /// Get data for the specified column in reader
        /// </summary>
        /// <param name="columnName"></param>
        /// <param name="reader"></param>
        /// <returns></returns>
        public static object GetDataForColumn(string columnName, IDataReader reader)
        {
            reader.GetSchemaTable().DefaultView.RowFilter = "ColumnName= '" + columnName + "'";
            return reader.GetSchemaTable().DefaultView.Count > 0? reader[columnName]:null; 
        }

        /// <summary>
        /// Get string representation of an object. If null is found then empty string returned else string representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static string GetString(object data)
        {
            return ((data == null) || (data == DBNull.Value)) ? string.Empty : data.ToString();
        }
             

        /// <summary>
        /// Get string representation of an object. If null is found then empty string returned else string representation of input parameter is returned
        /// </summary>
        /// <param name="columnName"></param>
        /// <param name="reader"></param>
        /// <returns></returns>
        public static string GetString(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value)) ? string.Empty : data.ToString();
        }

        /// <summary>
        /// Gets the unique identifier.
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public static Guid GetUniqueIdentifier(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? Guid.Empty : new Guid(Convert.ToString(data));
        }

        /// <summary>
        /// Get Uniqueidentifier representation of an object. If null is found then empty string returned else string representation of input parameter is returned
        /// </summary>
        /// <param name="columnName"></param>
        /// <param name="reader"></param>
        /// <returns></returns>
        public static Guid GetUniqueIdentifier(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? Guid.Empty : new Guid(Convert.ToString(data));
        }

        /// <summary>
        /// Get datetime representation of an object. If null is found then min date returned else datetime representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static DateTime GetDateTime(object data)
        {
            return ((data == null) || (data == DBNull.Value)) ? DateTime.MinValue : Convert.ToDateTime(data);
        }

        /// <summary>
        /// Get datetime representation of an object. If null is found then min date returned else datetime representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static DateTime GetDateTime(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value)) ? DateTime.MinValue : Convert.ToDateTime(data);
        }

        /// <summary>
        /// Get int representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static int GetInt32(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToInt32(data);
        }

        /// <summary>
        /// Get int representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static int GetInt32(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToInt32(data);
        }

        /// <summary>
        /// Get int representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static long GetLong(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToInt64(data);
        }

        /// <summary>
        /// Get int representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static long GetLong(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToInt64(data);
        }

        /// <summary>
        /// Get byte representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static byte GetByte(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? (byte)0 : Convert.ToByte(data);
        }

        /// <summary>
        /// Get byte representation of an object. If null is found then zero returned else int representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static byte GetByte(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? (byte)0 : Convert.ToByte(data);
        }

        /// <summary>
        /// Get double representation of an object. If null is found then zero returned else double representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static double GetDouble(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToDouble(data);
        }

        /// <summary>
        /// Get double representation of an object. If null is found then zero returned else double representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static double GetDouble(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToDouble(data);
        }



        /// <summary>
        /// Get double representation of an object. If null is found then zero returned else double representation of input parameter is returned
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public static double GetFloat(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : (float)data;
        }
        /// <summary>
        /// Get double representation of an object. If null is found then zero returned else double representation of input parameter is returned
        /// </summary>
        /// <param name="reader">The reader.</param>
        /// <param name="columnName">Name of the column.</param>
        /// <returns></returns>
        public static float GetFloat(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : (float)data;
        }



        /// <summary>
        /// Get bool representation of an object. If null is found then false returned else bool representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool GetBoolean(object data)
        {
            return ((data == null) || (data == DBNull.Value)) ? false : Convert.ToBoolean(data);
        }

        /// <summary>
        /// Get bool representation of an object. If null is found then false returned else bool representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool GetBoolean(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value)) ? false : Convert.ToBoolean(data);
        }

        /// <summary>
        /// Get bool representation of an object. If null is found then null returned else bool representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool? GetNullableBoolean(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            
            if ((data != null) && (data != DBNull.Value))
                return Convert.ToBoolean(data);
            
            return null;
        }

        /// <summary>
        /// Get bool representation of an object. If null is found then false returned else bool representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool GetBooleanGetDouble(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value)) ? false : Convert.ToBoolean(data);
        }

        /// <summary>
        /// Get binary/byte representation of an object. If null is found then false returned else byte representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static byte[] GetBytes(object data)
        {
            return ((data == null) || (data == DBNull.Value)) ? new byte[0] : (byte[])data;           
        }

        /// <summary>
        /// Get binary/byte representation of an object. If null is found then false returned else byte representation of input parameter is returned
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static byte[] GetBytes(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);
            return ((data == null) || (data == DBNull.Value)) ? new byte[0] : (byte[])data;
        }

        /// <summary>
        /// Check if the parameter passed is valid date. If not then return db null value
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public static object GetDBNullValue(DateTime date)
        {
            return (date == DateTime.MinValue) ? (object)DBNull.Value : date;
        }
        /// <summary>
        /// Check if the parameter passed is a null string. If it is a null or empty string then returns db null value
        /// </summary>
        /// <param name="text">The text.</param>
        /// <returns></returns>
        public static object GetDBNullValue(String text)
        {
            return String.IsNullOrEmpty(text) ? (object) DBNull.Value : text;
        }

        public static object GetDBNullValueForLong(long id)
        {
            return id <= 0 ? (object) DBNull.Value : id;
        }

        /// <summary>
        /// Check if the parameter passed is valid date. If not then return db null value
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public static object GetDBNullValueCorrected(DateTime date)
        {
            return date == DateTime.MinValue ? (object) DBNull.Value : date;
        }

        /// <summary>
        /// Gets the enum.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj">The obj.</param>
        /// <returns></returns>
        public static T GetEnum<T>(object obj)
        {
            return (T)Enum.Parse(typeof(T), obj.ToString());
        }

        /// <summary>
        /// Gets the enum.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="reader">The reader.</param>
        /// <param name="columnName">Name of the column.</param>
        /// <returns></returns>
        public static T GetEnum<T>(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);

            if ((data == null) || (data == DBNull.Value) || string.IsNullOrEmpty(data.ToString()))
                return default(T);

            return (T)Enum.Parse(typeof(T), data.ToString());
        }
        
        /// <summary>
        /// Gets the enum value.
        /// </summary>
        /// <typeparam name="TEnum">The type of the enum.</typeparam>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public static TEnum GetEnumValue<TEnum>(object data)
        {
            if ((data == null) || (data == DBNull.Value) || string.IsNullOrEmpty(data.ToString()))
                return default(TEnum);

            return data.GetType().Equals(typeof (string))
                       ? (TEnum) Enum.Parse(typeof (TEnum), data.ToString())
                       : (TEnum) data;
        }

        /// <summary>
        /// Gets the enum value.
        /// </summary>
        /// <typeparam name="TEnum">The type of the enum.</typeparam>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public static TEnum GetEnumValue<TEnum>(IDataReader reader, string columnName)
        {
            object data = GetDataForColumn(columnName, reader);

            if ((data == null) || (data == DBNull.Value) || string.IsNullOrEmpty(data.ToString()))
                return default(TEnum);

            return data.GetType().Equals(typeof(string))
                       ? (TEnum)Enum.Parse(typeof(TEnum), data.ToString())
                       : (TEnum)data;
        }

        public static object GetObject(object obj)
        {
            return ((obj == null) || (obj == DBNull.Value) || (obj.ToString() == string.Empty)) ? null : obj;
        }

        public static Decimal GetDecimal(object data)
        {
            return ((data == null) || (data == DBNull.Value) || (data.ToString() == string.Empty)) ? 0 : Convert.ToDecimal(data);
        }
    }
}