// Generated by gencpp from file rosapi/ServiceHostRequest.msg
// DO NOT EDIT!


#ifndef ROSAPI_MESSAGE_SERVICEHOSTREQUEST_H
#define ROSAPI_MESSAGE_SERVICEHOSTREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace rosapi
{
template <class ContainerAllocator>
struct ServiceHostRequest_
{
  typedef ServiceHostRequest_<ContainerAllocator> Type;

  ServiceHostRequest_()
    : service()  {
    }
  ServiceHostRequest_(const ContainerAllocator& _alloc)
    : service(_alloc)  {
  (void)_alloc;
    }



   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _service_type;
  _service_type service;





  typedef boost::shared_ptr< ::rosapi::ServiceHostRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::rosapi::ServiceHostRequest_<ContainerAllocator> const> ConstPtr;

}; // struct ServiceHostRequest_

typedef ::rosapi::ServiceHostRequest_<std::allocator<void> > ServiceHostRequest;

typedef boost::shared_ptr< ::rosapi::ServiceHostRequest > ServiceHostRequestPtr;
typedef boost::shared_ptr< ::rosapi::ServiceHostRequest const> ServiceHostRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::rosapi::ServiceHostRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::rosapi::ServiceHostRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::rosapi::ServiceHostRequest_<ContainerAllocator1> & lhs, const ::rosapi::ServiceHostRequest_<ContainerAllocator2> & rhs)
{
  return lhs.service == rhs.service;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::rosapi::ServiceHostRequest_<ContainerAllocator1> & lhs, const ::rosapi::ServiceHostRequest_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace rosapi

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::rosapi::ServiceHostRequest_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::rosapi::ServiceHostRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::rosapi::ServiceHostRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "1cbcfa13b08f6d36710b9af8741e6112";
  }

  static const char* value(const ::rosapi::ServiceHostRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x1cbcfa13b08f6d36ULL;
  static const uint64_t static_value2 = 0x710b9af8741e6112ULL;
};

template<class ContainerAllocator>
struct DataType< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "rosapi/ServiceHostRequest";
  }

  static const char* value(const ::rosapi::ServiceHostRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "string service\n"
;
  }

  static const char* value(const ::rosapi::ServiceHostRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.service);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ServiceHostRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::rosapi::ServiceHostRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::rosapi::ServiceHostRequest_<ContainerAllocator>& v)
  {
    s << indent << "service: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.service);
  }
};

} // namespace message_operations
} // namespace ros

#endif // ROSAPI_MESSAGE_SERVICEHOSTREQUEST_H
