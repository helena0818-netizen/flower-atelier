export const NAV_LINKS = [
  { label: 'Signature', href: '#signature' },
  { label: 'Bouquet', href: '#bouquet' },
  { label: 'Review', href: '#review' },
  { label: 'Contact', href: '#contact' },
];

export const SIGNATURE_FEATURES = [
  {
    title: '세련된 디자인',
    description: '트렌디하지만 유행을 타지 않는 클래식한 조화로움을 추구합니다.',
    icon: 'Sparkles',
  },
  {
    title: '고객 맞춤형 선물 제안',
    description: '받는 이의 취향과 상황을 고려한 맞춤형 플라워 큐레이션을 제공합니다.',
    icon: 'Gift',
  },
  {
    title: '편리한 주문',
    description: '누구나 쉽고 편리하게 카카오톡으로 소통하고 예약할 수 있습니다.',
    icon: 'MessageSquare',
  },
];

export const BEST_BOUQUETS = [
  {
    id: 1,
    name: 'Soft Rose Bouquet',
    description: '은은한 핑크톤의 시그니처 꽃다발',
    price: '₩59,000',
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1644248422971-e7e83cb0d3d9?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Chic White Bouquet',
    description: '깨끗하고 세련된 무드의 화이트 플라워',
    price: '₩63,000',
    badge: 'GIFT',
    image: 'https://images.unsplash.com/photo-1712773802122-9572367cea19?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Mood Flower Basket',
    description: '어느곳에나 어울리면서 포인트가 되는 플라워 바스켓',
    price: '₩72,000',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1641559564912-971904fc74da?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'French Garden Bouquet',
    description: '자연스럽고 감각적인 가든 스타일',
    price: '₩68,000',
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1586973699006-2a096c90f847?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Daily Bloom Mini',
    description: '가볍게 선물하기 좋은 미니 부케',
    price: '₩39,000',
    badge: 'GIFT',
    image: 'https://images.unsplash.com/photo-1575298287152-0eda80c44232?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Signature Gift Flower',
    description: '특별한 날을 위한 완성도 높은 시그니처 플라워',
    price: '₩89,000',
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1759420319818-1a2c8684a584?w=800&auto=format&fit=crop&q=80',
  },
];

export const OCCASIONS = [
  {
    id: 'birthday',
    label: '생일',
    title: '사랑하는 사람의 생일을 위하여',
    description: '가장 화사하고 생동감 넘치는 꽃들로 생일 아침을 채워보세요.',
    recommendation: '밝은 옐로우 톤의 튤립이나 피치톤의 라넌큘러스를 추천합니다.',
    image: 'https://images.unsplash.com/photo-1620843437920-ead942b3abd3?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'anniversary',
    label: '기념일',
    title: '우리의 소중한 시간을 기록하는 꽃',
    description: '깊이 있는 색감의 장미와 고급스러운 소재들로 특별함을 더합니다.',
    recommendation: '딥 레드나 은은한 보라빛이 감도는 시그니처 부케를 준비해보세요.',
    image: 'https://images.unsplash.com/photo-1561181286-d39736abc71e?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'housewarming',
    label: '집들이',
    title: '새로운 공간을 밝히는 선물',
    description: '관리하기 쉽고 공간의 분위기를 바꾸는 세련된 바스켓이나 화병 꽂이입니다.',
    recommendation: '그린 소재가 듬뿍 들어간 내추럴한 스타일의 바스켓이 인기가 많습니다.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'congrats',
    label: '축하선물',
    title: '성취와 기쁨을 함께 나누는 순간',
    description: '축하의 마음이 잘 전달될 수 있는 풍성하고 힘 있는 라인의 꽃들입니다.',
    recommendation: '수국이나 백합 등 화려하고 볼륨감 있는 꽃들을 추천드립니다.',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'forme',
    label: '나를 위한 꽃',
    title: '일상 속 작은 쉼표, 셀프 기프트',
    description: '나만의 공간에 생기를 불어넣어 줄 작지만 확실한 행복입니다.',
    recommendation: '계절감을 가장 잘 느낄 수 있는 오늘의 꽃 한 다발을 추천합니다.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0fab?w=1200&auto=format&fit=crop&q=80',
  },
];

export const REVIEWS = [
  {
    id: 1,
    author: '김지현님',
    content: '여자친구 생일 선물로 주문했는데 리본 하나까지 너무 세련되어서 만족스러웠어요. 상담도 친절하셔서 믿고 맡길 수 있었습니다.',
    rating: 5,
  },
  {
    id: 2,
    author: '이민아님',
    content: '어머니 기념일 꽃바구니가 너무 고급스럽게 제작되었어요. 꽃 상태도 너무 좋고 배송도 약속한 시간에 딱 맞춰 주셨습니다.',
    rating: 5,
  },
  {
    id: 3,
    author: '박서준님',
    content: '집들이 선물로 바스켓 주문했는데 친구가 너무 좋아하네요. 인테리어랑도 잘 어울리고 센스 있다는 소리 들었습니다.',
    rating: 5,
  },
  {
    id: 4,
    author: '최예림님',
    content: '제가 저한테 주는 선물이었는데, 포장 풀 때부터 향기가 너무 좋아서 힐링되었어요. 시들지 않고 오래가서 신선함이 느껴졌습니다.',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: '당일 주문도 가능한가요?',
    answer: '네, 가능합니다. 다만 매장에 준비된 생화 상황에 맞춰 제작되므로 최소 2~3시간 전에는 연락 주시는 것이 좋습니다. 원하시는 특정 꽃이 있다면 2~3일 전 예약을 권장드립니다.',
  },
  {
    question: '원하는 색감으로 제작 가능한가요?',
    answer: '물론입니다. 원하시는 메인 컬러나 참고 사진을 말씀해주시면 플로리스트가 최적의 조합으로 디자인해드립니다.',
  },
  {
    question: '가격대는 어떻게 되나요?',
    answer: '미니 다발은 3만원대부터 시작하며, 일반적인 꽃다발은 5~8만원대, 꽃바구니는 10만원대 이상으로 구성되어 있습니다. 예산에 맞춰 조율 가능하니 편하게 문의해주세요.',
  },
  {
    question: '사진을 참고해서 주문할 수 있나요?',
    answer: '네, 인스타그램이나 블로그의 사진을 캡쳐해서 보내주시면 상담이 더욱 원활해집니다.',
  },
  {
    question: '픽업/배달 여부는 어떻게 되나요?',
    answer: '매장 직접 픽업 또는 서울/경기 지역 퀵 배송이 가능합니다. 거리에 따른 배송비가 발생할 수 있습니다.',
  },
];

export const CONTACT_INFO = {
  shopName: '플라워아틀리에 (Flower Atelier)',
  address: '서울특별시 강동구 성안로 (성내동)',
  businessHours: '평일 10:00 - 20:00 / 주말 10:00 - 18:00',
  phone: '02-1234-5678',
  kakaotalk: 'https://pf.kakao.com/_xxxx',
};
